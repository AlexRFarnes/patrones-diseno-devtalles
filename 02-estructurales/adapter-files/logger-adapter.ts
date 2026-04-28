import { Logger } from "jsr:@deno-library/logger";

import { COLORS } from "../../helpers/colors.ts";

// TODO: Implementar el LoggerAdapter

interface ILoggerAdapter {
  file: string;

<<<<<<< HEAD
  writeLog(message: string): void;
  writeError(message: string): void;
  writeWarning(message: string): void;
  writeInfo(message: string): void;
}

export class LoggerAdapter implements ILoggerAdapter {
=======
  writeLog: (msg: string) => void;
  writeWarning: (msg: string) => void;
  writeError: (msg: string) => void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  public file: string;
  private logger = new Logger();

  constructor(file: string) {
    this.file = file;
  }

<<<<<<< HEAD
  writeLog(message: string): void {
    this.logger.info(`[${this.file}] ${message}`);
  }

  writeError(message: string): void {
    this.logger.error(`[${this.file}] ${message}`);
  }

  writeWarning(message: string): void {
    this.logger.warn(`[${this.file}] ${message}`);
  }

  writeInfo(message: string): void {
    this.logger.info(`[${this.file}] ${message}`);
=======
  writeLog(msg: string) {
    this.logger.info(`[${this.file} Log] ${msg}`);
  }

  writeWarning(msg: string) {
    this.logger.warn(`[${this.file} warning] %c${msg}`);
  }

  writeError(msg: string) {
    this.logger.error(`[${this.file} error] %c${msg}`);
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}
