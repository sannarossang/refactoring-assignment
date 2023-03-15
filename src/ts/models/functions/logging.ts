import * as dotenv from "dotenv";
dotenv.config();

export function logMessage(message: any) {
  if (process.env.LOGGING_ENABLED) {
    console.log(message);
  }
}
