export function logMessage(message: any): void {
  const shouldLog: boolean = process.env.VITE_TEST_LOGGING_ENABLED === "true";

  if (shouldLog) {
    logMessage(message);
  }
}
