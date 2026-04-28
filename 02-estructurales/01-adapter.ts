/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

<<<<<<< HEAD
import { LocalLogger } from "./adapter-files/local-logger.ts";
import { LoggerAdapter } from "./adapter-files/logger-adapter.ts";

const logger = new LoggerAdapter("01-adapter.ts");

logger.writeLog("This is a log message");
logger.writeError("This is an error message");
logger.writeWarning("This is a warning message");
logger.writeInfo("This is an info message");
=======
import { DenoLoggerAdapter } from './adapter-files/logger-adapter.ts';
// import { LocalLogger } from './adapter-files/local-logger.ts';

const logger = new DenoLoggerAdapter('01-adapter.ts');

logger.writeLog('Mensaje de un log normal');
logger.writeWarning('Una alerta normal, información');
logger.writeError('Algo muy malo salió por aquí');
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
