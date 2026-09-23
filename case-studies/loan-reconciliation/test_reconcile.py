"""One smoke check for the public sample and repeatable outputs."""

from pathlib import Path
from tempfile import TemporaryDirectory

from reconcile import run


def test_sample():
    base = Path(__file__).parent
    with TemporaryDirectory() as directory:
        out = Path(directory)
        summary = run(base / "internal.csv", base / "bank.csv", out)
        assert summary["matched_references"] == 5
        assert summary["exception_references"] == 6
        assert summary["statuses"] == {
            "account_or_type_mismatch": 1, "amount_mismatch": 1, "duplicate_reference": 1,
            "matched": 5, "missing_bank": 1, "missing_internal": 1, "timing_review": 1,
        }
        first = {file.name: file.read_bytes() for file in out.iterdir()}
        assert run(base / "internal.csv", base / "bank.csv", out) == summary
        assert first == {file.name: file.read_bytes() for file in out.iterdir()}


if __name__ == "__main__":
    test_sample()
