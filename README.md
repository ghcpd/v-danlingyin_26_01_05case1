# Logger Utility

## createLogger

Creates a logger instance.

### Options

- level: "info" | "warn" | "error"  
  Default: "info"

- json: boolean  
  Default: true

### Usage

```ts
const logger = createLogger({
  level: "info"
});

logger.log("hello world");
