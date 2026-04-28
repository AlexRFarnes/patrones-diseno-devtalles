import { COLORS } from "../../helpers/colors.ts";

<<<<<<< HEAD
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
=======
export class LocalLogger {
  constructor(private file: string) {}

  writeLog(msg: string): void {
    console.log(`[${this.file} Log] ${msg}`);
  }

  writeError(msg: string): void {
    console.log(`[${this.file} error] %c${msg}`, COLORS.red);
  }

  writeWarning(msg: string): void {
    console.log(`[${this.file} warning] %c${msg}`, COLORS.yellow);
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}
