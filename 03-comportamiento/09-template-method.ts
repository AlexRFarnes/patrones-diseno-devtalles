/**
 * ! Patrón Template Method
 *
 * El patrón Template Method es un patrón de diseño de comportamiento
 * que define el esqueleto de un algoritmo en una operación,
 * delegando algunos pasos a las subclases.
 *
 * Permite que las subclases redefinan ciertos pasos de un algoritmo
 * sin cambiar su estructura.
 *
 * * Es útil cuando se tiene un algoritmo que sigue una secuencia de pasos
 * * y se quiere permitir a las subclases que redefinan algunos de esos pasos.
 *
 * https://refactoring.guru/es/design-patterns/template-method
 */

/**
 * Contexto: Vamos a implementar un sistema que permite preparar
 * diferentes bebidas calientes, como café y té.
 *
 * Aunque el proceso general para preparar ambas bebidas es similar
 * (hervir agua, añadir el ingrediente principal, servir en una taza),
 * hay pasos específicos que varían dependiendo de la bebida.
 *
 * El patrón Template Method es perfecto para este caso,
 * ya que define un esqueleto general del algoritmo en una clase base
 * y delega los detalles específicos a las subclases.
 */

import { COLORS } from "./../helpers/colors.ts";

abstract class HotBeverage {
  prepare(): void {
    this.boilWater();
    this.addMainIngredient();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater(): void {
    console.log("%cHirviendo agua", COLORS.red);
  }

  private pourInCup(): void {
    console.log("%cVertiendo en una taza", COLORS.blue);
  }

  protected abstract addMainIngredient(): void;
  protected abstract addCondiments(): void;
}

class Tea extends HotBeverage {
  protected override addMainIngredient(): void {
    console.log("%cAñadiendo una bolsa de té", COLORS.green);
  }

  protected override addCondiments(): void {
    console.log("%cAñadiendo miel y limón", COLORS.yellow);
  }
}

class Coffee extends HotBeverage {
  protected override addMainIngredient(): void {
    console.log("%cAñadiendo café molido", COLORS.green);
  }

  protected override addCondiments(): void {
    console.log("%cAñadiendo azúcar y leche", COLORS.yellow);
  }
}

function main() {
  const tea = new Tea();
  console.log("%cPreparando té", COLORS.blue);
  tea.prepare();
  console.log("\n");
  console.log("%cPreparando café", COLORS.blue);
  const coffee = new Coffee();
  coffee.prepare();
}

main();
