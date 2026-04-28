/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Command {
  execute(): void;
}

class Light {
  turnOn(): void {
    console.log("%cLight is on", COLORS.yellow);
  }

  turnOff(): void {
    console.log("%cLight is off", COLORS.yellow);
  }
}

class Fan {
  on(): void {
    console.log("%cFan is on", COLORS.green);
  }

  off(): void {
    console.log("%cFan is off", COLORS.green);
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}

class FanOnCommand implements Command {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.on();
  }
}

class FanOffCommand implements Command {
  constructor(private fan: Fan) {}

  execute(): void {
    this.fan.off();
  }
}

class RemoteControl {
  constructor(private commands: Record<string, Command> = {}) {}

  setCommand(button: string, command: Command): void {
    this.commands[button] = command;
  }

  pressButton(button: string): void {
    if (this.commands[button]) {
      this.commands[button].execute();
      return;
    }

    console.log(`%cNo hay comando para el botón ${button}`, COLORS.red);
  }
}

function main() {
  const remoteControl = new RemoteControl();
  const light = new Light();
  const fan = new Fan();

  const lightOnCommand = new LightOnCommand(light);
  const lightOffCommand = new LightOffCommand(light);
  const fanOnCommand = new FanOnCommand(fan);
  const fanOffCommand = new FanOffCommand(fan);

  //   Configurar los comandos
  remoteControl.setCommand("1", lightOnCommand);
  remoteControl.setCommand("2", lightOffCommand);
  remoteControl.setCommand("3", fanOnCommand);
  remoteControl.setCommand("4", fanOffCommand);

  do {
    const command =
      prompt(
        `Presiona el botón para ejecutar la acción:
      1. Encender la luz
      2. Apagar la luz
      3. Encender el ventilador
      4. Apagar el ventilador

      Elige una opción:
      `,
      ) ?? "";

    remoteControl.pressButton(command);
  } while (prompt("¿Quieres continuar? (s/n)") !== "n");
}

main();
