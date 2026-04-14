/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
  public cpu: string = "cpu - no defined";
  public ram: string = "ram - no defined";
  public storage: string = "storage - no defined";
  public gpu?: string;

  displayConfiguration(): void {
    console.log(`Configuracion de a computador: 
      CPU: ${this.cpu}
      RAM: ${this.ram}
      STORAGE: ${this.storage}
      GPU: ${this.gpu ?? "No tiene GPU"}
    `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCpu(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRam(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGpu(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

function main() {
  const basicComputer = new ComputerBuilder()
    .setCpu("Intel Core i5")
    .setRam("8GB")
    .setStorage("512GB")
    .build();
  console.log("%cBasic Computer: ", COLORS.blue);
  basicComputer.displayConfiguration();

  const gamingComputer = new ComputerBuilder()
    .setCpu("AMD Ryzen 9 9900X")
    .setRam("64GB")
    .setStorage("1TB")
    .setGpu("NVIDIA RTX 5090")
    .build();
  console.log("%cGaming Computer: ", COLORS.pink);
  gamingComputer.displayConfiguration();
}

main();
