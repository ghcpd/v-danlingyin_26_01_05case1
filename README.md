# Logger Utility

## createLogger

Creates a logger instance.

### Options

- `level`: one of `"info"`, `"warn"`, or `"error"`  
  **Default:** `"info"`

- `json`: `boolean` — when `true` the logger outputs JSON; when `false` it outputs a plain string  
  **Default:** `true`

### Behavior

- `createLogger(options?)` returns an object with a `log(message: string)` method.
- When `json` is `true` (the default) the logger writes a JSON string: `{"level": <level>, "message": <message>}`.
- When `json` is `false` the logger writes a plain string in the format: `[<level>] <message>`.

### Usage

```ts
// use defaults (level: "info", json: true)
const logger = createLogger();
logger.log("hello world");

// override options
const warnLogger = createLogger({ level: "warn", json: false });
warnLogger.log("be careful");
```
