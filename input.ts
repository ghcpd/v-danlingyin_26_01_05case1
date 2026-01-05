// input.ts

export interface LoggerOptions {
  level?: "info" | "warn" | "error";
  json?: boolean;
}

/**
 * Create a logger instance
 */
export function createLogger(options?: LoggerOptions) {
  const level = options?.level ?? "info";
  const json = options?.json ?? true;

  return {
    log(message: string) {
      const output = json
        ? JSON.stringify({ level, message })
        : `[${level}] ${message}`;

      console.log(output);
    }
  };
}