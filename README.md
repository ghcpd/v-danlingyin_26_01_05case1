# Logger Utility

## createLogger(options?: LoggerOptions)

Creates a logger instance that writes to stdout.

### Options

- `level?: "info" | "warn" | "error"`  
  **Default:** `"info"`

- `json?: boolean`  
  **Default:** `true`

### Behavior

- Returns an object with a `log(message: string): void` method.
- When `json` is `true` the logger writes a JSON string to stdout:
  `JSON.stringify({ level, message })`.
- When `json` is `false` the logger writes a plain-text line:
  `[<level>] <message>`.

### Examples

Default (no options):

```ts
const logger = createLogger();
logger.log("hello world");
// -> {"level":"info","message":"hello world"}
```

Plain-text output:

```ts
const logger = createLogger({ level: "warn", json: false });
logger.log("disk space low");
// -> [warn] disk space low
```

### Notes

- Allowed `level` values are **"info"**, **"warn"**, and **"error"**. `"debug"` is not supported by the current implementation.
- The README has been updated to match the implementation in `input.ts` (defaults: `level = "info"`, `json = true`).