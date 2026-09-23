# Loan transaction reconciliation — synthetic demo

This is a portfolio demonstration using invented loan and bank-feed records. It does **not** represent a real lender's systems, accounting controls, or production deployment.

The Python/Pandas script validates two CSV feeds, excludes duplicate references from matching, uses a SQL join to compare unique references, and exports a full reconciliation, an exception queue, and a repeatable summary with input-file hashes. Amounts are compared in integer cents. A date difference is marked for timing review; the script does not assume whether it is a legitimate settlement lag. An exception is a review flag, not an automatically determined accounting root cause.

Run with Python 3 and `pandas`:

```bash
python3 -m pip install pandas
python3 reconcile.py --out /tmp/loan-reconciliation-output
```

The sample produces five exact matches and six references needing review: an amount mismatch, a missing bank record, a missing internal record, an account mismatch, a duplicate reference, and a timing difference. `exceptions.csv` can be imported into Power BI, but no Power BI dashboard is included.

The case study demonstrates data validation and exception reporting. It does not implement a general ledger tie-out, loan balance roll-forward, accounting treatment, or month-end sign-off.
