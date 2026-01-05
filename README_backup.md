# Logger Utility

## createLogger

Creates a logger instance.

### Options

- level: string  
  Default: "debug"

- json: boolean  
  Default: false

### Usage

```ts
const logger = createLogger({
  level: "debug"
});

logger.log("hello world");
