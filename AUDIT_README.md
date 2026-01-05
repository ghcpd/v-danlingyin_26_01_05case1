# Documentation Audit — README.md

## What I reviewed
- `README.md` (original)
- `input.ts` (implementation)

## Key mismatches found
1. `level` — documented default/value (`"debug"`) did not match code (`"info"`, allowed values: `"info" | "warn" | "error"`).
2. `json` — documented default `false` but code defaults to `true`.
3. Example used `"debug"` (invalid per code) and README did not show actual output.

## Files generated
- `README_backup.md` — exact copy of the original README (unchanged)
- `README.md` — updated to match `input.ts`
- `report.json` — machine-readable audit report (issues + severity)
- `doc_validation.md` — mapping from code -> documentation statements
- `AUDIT_README.md` — this file (review summary + verification steps)

## How to verify (quick)
1. Read the implementation in `input.ts` and confirm the three lines shown in `doc_validation.md`.
2. Compare `README_backup.md` (original) vs `README.md` (updated) to see the precise changes.
3. Run these runtime checks (examples & expected outputs):
   - Default behavior (JSON output):
     - Expected: `{"level":"info","message":"hello"}`
   - Plain-text behavior:
     - Expected: `[warn] disk space low`

Suggested commands (if you have Node + ts-node or after build):
- Type-check: `npx tsc --noEmit`  (verifies the `level` union type)
- Quick runtime check (cross-shell):
  - Node (simulate defaults):
    node -e "const level=undefined ?? 'info'; const json=undefined ?? true; console.log(json?JSON.stringify({level,message:'hello'}):`[${level}] hello`);"

## Reviewer checklist
- [ ] Confirm `README.md` defaults match `input.ts` (see `doc_validation.md`).
- [ ] Confirm examples in `README.md` produce the expected outputs.
- [ ] Confirm `README_backup.md` is an exact copy of the original documentation.

If you want, I can open a PR with these documentation-only changes.