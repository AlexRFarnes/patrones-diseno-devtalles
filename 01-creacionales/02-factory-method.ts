/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log(`Preparando una hamburguesa de %cpollo`, COLORS.yellow);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log(`Preparando una hamburguesa de %cres`, COLORS.orange);
  }
}

class FishHamburguer implements Hamburger {
  prepare(): void {
    console.log(`Preparando una hamburguesa de %cpescado`, COLORS.green);
  }
}

abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburguer = this.createHamburger();
    hamburguer.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class FishRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new FishHamburguer();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt(
    "¿Qué tipo de hamburguesa quieres? (chicken / beef / fish)",
  );

  switch (burgerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    case "fish":
      restaurant = new FishRestaurant();
      break;
    default:
      throw new Error("Opción no válida");
  }

  restaurant.orderHamburger();
}

main();
