# Documentation Validation

This document maps the updated README statements to the actual code behavior in `input.ts`.

## Mapping

- README: "Default: `\"info\"` for `level`"
  - Code: `const level = options?.level ?? "info";` — matches exactly.

- README: "`level` must be one of `\"info\"`, `\"warn\"`, or `\"error\"`"
  - Code: `export interface LoggerOptions { level?: "info" | "warn" | "error"; ... }` — matches exactly.

- README: "Default: `true` for `json`"
  - Code: `const json = options?.json ?? true;` — matches exactly.

- README: "When `json` is `true` the logger writes a JSON string `{ level, message }`"
  - Code: `const output = json ? JSON.stringify({ level, message }) : ...` — matches exactly.

- README: "When `json` is `false` the logger writes `[<level>] <message>`"
  - Code: `: \\`[${level}] ${message}\\`;` — matches exactly.

## Verification steps

1. Inspect `input.ts` and confirm the three `const`/type lines above.
2. Compile TypeScript (`tsc`) to verify `LoggerOptions.level` enforces allowed values.
3. Run a simple script that calls `createLogger()` and `createLogger({ json: false })` to observe output formats.

All updated README statements are derived directly from the code and reflect current behavior without introducing new features.
