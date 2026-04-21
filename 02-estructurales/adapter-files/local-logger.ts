import { COLORS } from "../../helpers/colors.ts";

// TODO: Implementar el LocalLogger Class
export class LocalLogger {
  constructor(private readonly filename: string) {}

  writeLog(message: string): void {
    console.log(`[${this.filename}] ${message}`);
  }

  writeError(message: string): void {
    console.log(`%c[${this.filename}] ${message}`, COLORS.red);
  }

  writeWarning(message: string): void {
    console.log(`%c[${this.filename}] ${message}`, COLORS.yellow);
  }

  writeInfo(message: string): void {
    console.log(`%c[${this.filename}] ${message}`, COLORS.blue);
  }
}
