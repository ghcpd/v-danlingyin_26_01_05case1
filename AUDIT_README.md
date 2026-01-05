# AUDIT_README

## What was reviewed
- `input.ts` (logger implementation)
- `README.md` (primary documentation)

## Mismatches found
1. **Options - level**: Documented as generic string with default `"debug"`; usage example used `level: "debug"`. Code restricts to `"info" | "warn" | "error"` and defaults to `"info"`.
2. **Options - json**: Documented default `false`, but code defaults to `true` and logs JSON-formatted output when enabled.

## Files generated
- `README_backup.md` — original README snapshot
- `README.md` — updated to match code
- `report.json` — documentation audit report
- `doc_validation.md` — code-to-doc mapping evidence

## How to verify
1. Inspect `input.ts` to confirm `createLogger` defaults and logging formats.
2. Compare `README_backup.md` vs `README.md` to see corrections for `level` and `json` options.
3. Review `report.json` for issue details and severities.
4. (Optional) Run a quick script:
   ```ts
   import { createLogger } from './input';
   createLogger().log('test');          // JSON output with level "info"
   createLogger({ json: false }).log('test'); // Plain output: [info] test
   ```
   Confirm outputs match the updated README.
