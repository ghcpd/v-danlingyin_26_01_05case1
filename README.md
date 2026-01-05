# Logger Utility

## createLogger

Creates a logger instance.

### Options

- level: "info" | "warn" | "error"  
  Default: "info"

- json: boolean  
  Default: true  
  When `true`, logs as JSON stringified object `{"level":"...","message":"..."}`. When `false`, logs as `[level] message`.

### Usage

```ts
const logger = createLogger({
  level: "warn",
  json: false
});

logger.log("hello world"); // outputs: [warn] hello world

const jsonLogger = createLogger();
jsonLogger.log("hello world"); // outputs: {"level":"info","message":"hello world"}
```