import { Logger } from "jsr:@deno-library/logger";

import { COLORS } from "../../helpers/colors.ts";

// TODO: Implementar el LoggerAdapter

interface ILoggerAdapter {
  file: string;

  writeLog(message: string): void;
  writeError(message: string): void;
  writeWarning(message: string): void;
  writeInfo(message: string): void;
}

export class LoggerAdapter implements ILoggerAdapter {
  public file: string;
  private logger = new Logger();

  constructor(file: string) {
    this.file = file;
  }

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
  }
}
