/**
 * ! Patrón State
 * Este patrón permite a un objeto cambiar su comportamiento
 * cuando su estado interno cambia.
 *
 * * Es útil cuando un objeto tiene un comportamiento que depende de su estado
 * * y debe cambiar su comportamiento en tiempo de ejecución dependiendo de ese estado.
 *
 * https://refactoring.guru/es/design-patterns/state
 */

/**
 * * Objetivo: Implementar el patrón State para simular el funcionamiento
 * * de una máquina expendedora.
 * * La máquina tiene diferentes estados,
 *  * Como Esperando Dinero,
 *  * Seleccionando Producto,
 *  * Entregando Producto,
 * * y su comportamiento varía dependiendo del estado actual.
 */

import { COLORS } from "../helpers/colors.ts";
import { sleep } from "../helpers/sleep.ts";

interface State {
  name: string;

  insertMoney(amount: number): void;
  selectProduct(product: string): void;
  dispenseProduct(): void;
}

class VendingMachine {
  private state: State;

  constructor() {
    this.state = new WaitingForMoneyState(this);
  }

  insertMoney(amount: number): void {
    this.state.insertMoney(amount);
  }
  selectProduct(product: string): void {
    this.state.selectProduct(product);
  }
  dispenseProduct(): void {
    this.state.dispenseProduct();
  }

  getStateName(): string {
    return this.state.name;
  }

  setState(newState: State): void {
    this.state = newState;
    console.log(`%cState changed to ${newState.name}`, COLORS.blue);
  }
}

// States
class WaitingForMoneyState implements State {
  public name: string = "Waiting For Money";
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertMoney(amount: number): void {
    console.log(`Inserted ${amount} dollars: Now you can select a product`);

    this.vendingMachine.setState(new SelectProductState(this.vendingMachine));
  }
  selectProduct(product: string): void {
    console.log(
      `%cYou can't select a product yet, you need to insert money first`,
      COLORS.red,
    );
  }
  dispenseProduct(): void {
    console.log(
      `%cYou can't dispense a product yet, you need to select a product first`,
      COLORS.red,
    );
  }
}

class SelectProductState implements State {
  public name: string = "Select Product";
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertMoney(amount: number): void {
    console.log(
      `%cYou can't insert money yet, you need to select a product first`,
      COLORS.red,
    );
  }
  selectProduct(product: string): void {
    console.log(`%cSelected ${product}`, COLORS.green);

    this.vendingMachine.setState(new DispenseProductState(this.vendingMachine));
  }
  dispenseProduct(): void {
    console.log(
      `%cYou can't dispense a product yet, you need to select a product first`,
      COLORS.red,
    );
  }
}

class DispenseProductState implements State {
  public name: string = "Dispense Product";
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertMoney(amount: number): void {
    console.log(
      `%cYou can't insert money yet, you need to select a product first`,
      COLORS.red,
    );
  }
  selectProduct(product: string): void {
    console.log(
      `%cYou can't select a product yet, you need to dispense a product first`,
      COLORS.red,
    );
  }
  dispenseProduct(): void {
    console.log(`%cDispensed product`, COLORS.green);

    this.vendingMachine.setState(new WaitingForMoneyState(this.vendingMachine));
  }
}

async function main() {
  const vendingMachine = new VendingMachine();

  let selectedOption: string | null = "4";

  do {
    console.clear();
    console.log(
      `Seleccciona una opcion: %c${vendingMachine.getStateName()}`,
      COLORS.blue,
    );
    selectedOption = prompt(`
      1. Insertar dinero
      2. Seleccionar producto
      3. Dispense producto
      4. Salir

      Opcion: `);

    let amount: number = 0;
    if (selectedOption === "1") {
      amount = Number.parseFloat(
        prompt("Ingrese la cantidad de dinero a insertar: ") || "0",
      );
    }
    let product: string = "";
    if (selectedOption === "2") {
      product = prompt("Ingrese el producto a seleccionar: ") || "";
    }

    switch (selectedOption) {
      case "1":
        vendingMachine.insertMoney(amount);
        break;
      case "2":
        vendingMachine.selectProduct(product);
        break;
      case "3":
        vendingMachine.dispenseProduct();
        break;
      case "4":
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción no válida");
        break;
    }

    await sleep(3000);
  } while (selectedOption !== "4");
}

main();
