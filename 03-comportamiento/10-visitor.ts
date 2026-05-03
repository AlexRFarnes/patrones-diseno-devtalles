/**
 * !Patrón Visitor
 *
 * El patrón Visitor es un patrón de diseño de comportamiento
 * que te permite separar algoritmos de los objetos sobre
 * los que operan.
 *
 * * Es útil cuando necesitas añadir nuevas operaciones a
 * * clases estables sin cambiar su código.
 *
 * https://refactoring.guru/es/design-patterns/visitor
 */

/**
 * Contexto: Imagina que estás diseñando un sistema para un parque
 * temático con diferentes tipos de atracciones:
 * montañas rusas, casas del terror y ruedas de la fortuna.
 *
 * Cada atracción tiene su propio precio de entrada y ofrece un descuento
 * dependiendo del tipo de visitante (niño, adulto o adulto mayor).
 *
 * Aquí es donde entra el patrón Visitor, que permite aplicar operaciones
 * específicas (como calcular el precio con descuento) dependiendo tanto
 * de la atracción como del tipo de visitante,
 * sin modificar las clases originales.
 */

import { COLORS } from "../helpers/colors.ts";

interface Visitor {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void;
  visitHauntedHouse(hauntedHouse: HauntedHouse): void;
  visitFerrisWheel(ferrisWheel: FerrisWheel): void;
}

interface Attraction {
  accept(visitor: Visitor): void;
  getPrice(): number;
}

class RollerCoaster implements Attraction {
  private price: number = 50;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): void {
    visitor.visitRollerCoaster(this);
  }
}

class HauntedHouse implements Attraction {
  private price: number = 30;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): void {
    visitor.visitHauntedHouse(this);
  }
}

class FerrisWheel implements Attraction {
  private price: number = 20;

  getPrice(): number {
    return this.price;
  }

  accept(visitor: Visitor): void {
    visitor.visitFerrisWheel(this);
  }
}

// Visitor
class ChildVisitor implements Visitor {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void {
    console.log(
      `Niño/a en Montaña Rusa tiene un descuento del 50%: $${rollerCoaster.getPrice() * 0.5}`,
    );
  }
  visitHauntedHouse(hauntedHouse: HauntedHouse): void {
    console.log(
      `Niño/a en Casa del Terror tiene un descuento del 40%: $${hauntedHouse.getPrice() * 0.6}`,
    );
  }
  visitFerrisWheel(ferrisWheel: FerrisWheel): void {
    console.log(
      `Niño/a en Rueda de la Fortuna tiene un descuento del 70%: $${ferrisWheel.getPrice() * 0.3}`,
    );
  }
}

class AdultVisitor implements Visitor {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void {
    console.log(
      `Adulto en Montaña Rusa no tiene descuento: $${rollerCoaster.getPrice()}`,
    );
  }
  visitHauntedHouse(hauntedHouse: HauntedHouse): void {
    console.log(
      `Adulto en Casa del Terror no tiene descuento: $${hauntedHouse.getPrice()}`,
    );
  }
  visitFerrisWheel(ferrisWheel: FerrisWheel): void {
    console.log(
      `Adulto en Rueda de la Fortuna no tiene descuento: $${ferrisWheel.getPrice()}`,
    );
  }
}

class SeniorVisitor implements Visitor {
  visitRollerCoaster(rollerCoaster: RollerCoaster): void {
    console.log(
      `Adulto mayor en Montaña Rusa tiene un descuento del 20%: $${rollerCoaster.getPrice() * 0.2}`,
    );
  }
  visitHauntedHouse(hauntedHouse: HauntedHouse): void {
    console.log(
      `Adulto mayor en Casa del Terror tiene un descuento del 20%: $${hauntedHouse.getPrice() * 0.2}`,
    );
  }
  visitFerrisWheel(ferrisWheel: FerrisWheel): void {
    console.log(
      `Adulto mayor en Rueda de la Fortuna tiene un descuento del 20%: $${ferrisWheel.getPrice() * 0.2}`,
    );
  }
}

function main() {
  const attractions: Attraction[] = [
    new RollerCoaster(),
    new HauntedHouse(),
    new FerrisWheel(),
  ];

  console.log("%cPrecios de las atracciones: ", COLORS.pink);
  attractions.forEach(attraction => {
    console.log(`${attraction.constructor.name}: $${attraction.getPrice()}`);
  });

  console.log("\n%cVisitante Niño/a", COLORS.green);
  const childVisitor = new ChildVisitor();
  attractions.forEach(attraction => attraction.accept(childVisitor));

  console.log("\n%cVisitante Adulto", COLORS.blue);
  const adultVisitor = new AdultVisitor();
  attractions.forEach(attraction => attraction.accept(adultVisitor));

  console.log("\n%cVisitante Adulto Mayor", COLORS.red);
  const seniorVisitor = new SeniorVisitor();
  attractions.forEach(attraction => attraction.accept(seniorVisitor));
}

main();
