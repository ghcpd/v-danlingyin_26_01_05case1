# Documentation Validation

## How the documentation now matches the code

- `LoggerOptions.level` is defined as `"info" | "warn" | "error"` with default `"info"` (`input.ts`, lines 3-13). README `Options - level` now lists these values and the correct default.
- `LoggerOptions.json` defaults to `true` (`input.ts`, lines 3-13). README `Options - json` now states default `true` and explains JSON vs plain output formats.
- Logging behavior uses `JSON.stringify({ level, message })` when `json` is `true`, otherwise `[${level}] ${message}` (`input.ts`, lines 15-20). README usage examples show both modes and expected outputs.

## Code-to-doc mapping

| Code location | Behavior | README section |
| --- | --- | --- |
| `LoggerOptions.level` (lines 3-5) | Accepts `"info" | "warn" | "error"` | **Options - level** lists allowed values |
| `createLogger` defaulting (lines 11-13) | `level` defaults to `"info"`; `json` defaults to `true` | **Options** defaults updated accordingly |
| `log` implementation (lines 15-20) | JSON stringify when `json=true`; bracketed string when `json=false` | **Options - json** and **Usage** examples describe both outputs |
