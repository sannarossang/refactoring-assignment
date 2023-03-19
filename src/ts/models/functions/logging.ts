// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const loggingEnabled: string = import.meta.env.VITE_APP_LOGGING_ENABLED;

export function logMessage(message: any): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const shouldLog: boolean = loggingEnabled === "true";

  if (shouldLog) {
    console.log(message);
  }
}
