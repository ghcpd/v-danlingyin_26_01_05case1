# Documentation validation

This document maps the implementation in `input.ts` to the updated statements in `README.md`.

## Defaults

Code (implementation):

```ts
const level = options?.level ?? "info";
const json = options?.json ?? true;
```

Updated README statements:
- "Default: `\"info\"`" for `level` ✅
- "Default: `true`" for `json` ✅

## Allowed `level` values

Code (implementation):

```ts
export interface LoggerOptions {
  level?: "info" | "warn" | "error";
  json?: boolean;
}
```

Updated README statement:
- "`level?: \"info\" | \"warn\" | \"error\"`" — matches the TypeScript definition ✅

## Output format

Code (implementation):

```ts
const output = json
  ? JSON.stringify({ level, message })
  : `[${level}] ${message}`;

console.log(output);
```

Updated README statements:
- JSON output example: `{"level":"info","message":"..."}` ✅
- Plain-text example: `[warn] message` ✅

## Conclusion

All updated README statements are direct reflections of the source code. No code changes were made.