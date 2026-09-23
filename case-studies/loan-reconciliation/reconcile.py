"""Reconcile synthetic loan transactions against a bank settlement feed."""

import argparse
import hashlib
import json
import sqlite3
from decimal import Decimal, InvalidOperation
from pathlib import Path

import pandas as pd


REQUIRED = {"reference", "loan_id", "date", "type", "amount"}


def load_feed(path: Path, source: str) -> pd.DataFrame:
    frame = pd.read_csv(path, dtype=str, keep_default_na=False)
    missing = REQUIRED - set(frame.columns)
    if missing:
        raise ValueError(f"{source}: missing columns {', '.join(sorted(missing))}")
    frame = frame[list(sorted(REQUIRED))].copy()
    for column in ("reference", "loan_id", "date", "type", "amount"):
        if frame[column].str.strip().eq("").any():
            raise ValueError(f"{source}: blank {column} value")
    try:
        frame["date"] = pd.to_datetime(frame["date"], format="%Y-%m-%d", errors="raise").dt.strftime("%Y-%m-%d")
        frame["amount_cents"] = frame["amount"].map(lambda value: int(Decimal(value) * 100))
    except (ValueError, InvalidOperation) as error:
        raise ValueError(f"{source}: invalid date or amount") from error
    if frame["amount_cents"].le(0).any() or frame["amount"].map(lambda value: Decimal(value) * 100 % 1 != 0).any():
        raise ValueError(f"{source}: amounts must be positive with at most two decimal places")
    return frame.drop(columns="amount")


def reconcile(internal: pd.DataFrame, bank: pd.DataFrame) -> pd.DataFrame:
    duplicate_refs = set(internal.loc[internal.duplicated("reference", keep=False), "reference"])
    duplicate_refs |= set(bank.loc[bank.duplicated("reference", keep=False), "reference"])
    columns = ["reference", "loan_id", "date", "type", "amount_cents"]
    internal_unique = internal[~internal["reference"].isin(duplicate_refs)][columns]
    bank_unique = bank[~bank["reference"].isin(duplicate_refs)][columns]

    with sqlite3.connect(":memory:") as connection:
        internal_unique.to_sql("internal", connection, index=False)
        bank_unique.to_sql("bank", connection, index=False)
        joined = pd.read_sql_query("""
            SELECT i.reference, i.loan_id AS internal_loan_id, b.loan_id AS bank_loan_id,
                   i.date AS internal_date, b.date AS bank_date,
                   i.type AS internal_type, b.type AS bank_type,
                   i.amount_cents AS internal_cents, b.amount_cents AS bank_cents
            FROM internal i LEFT JOIN bank b ON i.reference = b.reference
            UNION ALL
            SELECT b.reference, NULL, b.loan_id, NULL, b.date, NULL, b.type, NULL, b.amount_cents
            FROM bank b LEFT JOIN internal i ON b.reference = i.reference
            WHERE i.reference IS NULL
        """, connection)

    rows = []
    for row in joined.itertuples(index=False):
        if pd.isna(row.bank_cents):
            status = "missing_bank"
        elif pd.isna(row.internal_cents):
            status = "missing_internal"
        elif row.internal_loan_id != row.bank_loan_id or row.internal_type != row.bank_type:
            status = "account_or_type_mismatch"
        elif row.internal_cents != row.bank_cents:
            status = "amount_mismatch"
        elif row.internal_date != row.bank_date:
            status = "timing_review"
        else:
            status = "matched"
        rows.append({"reference": row.reference, "status": status,
                     "internal_loan_id": row.internal_loan_id, "bank_loan_id": row.bank_loan_id,
                     "internal_date": row.internal_date, "bank_date": row.bank_date,
                     "internal_type": row.internal_type, "bank_type": row.bank_type,
                     "internal_cents": row.internal_cents, "bank_cents": row.bank_cents})

    for reference in sorted(duplicate_refs):
        rows.append({"reference": reference, "status": "duplicate_reference",
                     "internal_loan_id": "", "bank_loan_id": "", "internal_date": "", "bank_date": "",
                     "internal_type": "", "bank_type": "", "internal_cents": "", "bank_cents": ""})
    return pd.DataFrame(rows).sort_values("reference").reset_index(drop=True)


def run(internal_path: Path, bank_path: Path, output_dir: Path) -> dict:
    internal = load_feed(internal_path, "internal")
    bank = load_feed(bank_path, "bank")
    results = reconcile(internal, bank)
    exceptions = results[results["status"] != "matched"]
    summary = {
        "scope": "synthetic demonstration",
        "internal_rows": len(internal),
        "bank_rows": len(bank),
        "matched_references": int((results["status"] == "matched").sum()),
        "exception_references": len(exceptions),
        "internal_total_cents": int(internal["amount_cents"].sum()),
        "bank_total_cents": int(bank["amount_cents"].sum()),
        "statuses": results["status"].value_counts().sort_index().to_dict(),
        "input_sha256": {"internal": hashlib.sha256(internal_path.read_bytes()).hexdigest(),
                         "bank": hashlib.sha256(bank_path.read_bytes()).hexdigest()},
    }
    output_dir.mkdir(parents=True, exist_ok=True)
    results.to_csv(output_dir / "reconciliation.csv", index=False)
    exceptions.to_csv(output_dir / "exceptions.csv", index=False)
    (output_dir / "summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    return summary


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--internal", type=Path, default=Path(__file__).with_name("internal.csv"))
    parser.add_argument("--bank", type=Path, default=Path(__file__).with_name("bank.csv"))
    parser.add_argument("--out", type=Path, default=Path("reconciliation-output"))
    args = parser.parse_args()
    print(json.dumps(run(args.internal, args.bank, args.out), indent=2))
