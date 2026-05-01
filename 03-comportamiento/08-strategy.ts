/**
 * ! Patrón Strategy
 *
 * El patrón Strategy es un patrón de diseño de software que define una
 * familia de algoritmos, los encapsula y los hace intercambiables.
 *
 *
 * * Es útil cuando se tiene una clase que tiene un comportamiento que puede
 * * cambiar en tiempo de ejecución y se quiere delegar la responsabilidad de
 * * la implementación a otra clase.
 *
 * https://refactoring.guru/es/design-patterns/strategy
 */

/**
 * !Objetivo: Explicar el patrón Strategy usando un ejemplo donde varios
 * ! patitos compiten en una carrera y cada uno tiene su propia
 * ! estrategia de movimiento (por ejemplo, nadar, volar o caminar).
 */

import { COLORS } from "./../helpers/colors.ts";

interface MovingStrategy {
  move(): void;
}

class Swim implements MovingStrategy {
  move(): void {
    console.log(`\n%cEl pato vuela elegantemente sobre el agua`, COLORS.blue);
  }
}

class Fly implements MovingStrategy {
  move(): void {
    console.log(`\n%cEl pato vuela elegantemente sobre el agua`, COLORS.pink);
  }
}

class Walk implements MovingStrategy {
  move(): void {
    console.log(`\n%cEl pato camina torpemente por la orilla`, COLORS.green);
  }
}

class Duck {
  private name: string;
  private movingStrategy: MovingStrategy;

  constructor(name: string, movingStrategy: MovingStrategy) {
    this.name = name;
    this.movingStrategy = movingStrategy;

    console.log(`%c${name} está listo para competir\n\n`, COLORS.yellow);
  }

  move(): void {
    console.log(`\n%c${this.name} se prepara para moverse`, COLORS.yellow);
    this.movingStrategy.move();
  }

  setMovingStrategy(movingStrategy: MovingStrategy): void {
    this.movingStrategy = movingStrategy;
    console.log(
      `\n%c${this.name} ha cambiado su estrategia de movimiento`,
      COLORS.yellow,
    );
  }
}

function main() {
  const duck1 = new Duck("Donald", new Swim());
  const duck2 = new Duck("Daffy", new Fly());
  const duck3 = new Duck("Scrooge", new Walk());

  duck1.move();
  duck2.move();
  duck3.move();

  duck3.setMovingStrategy(new Swim());
  duck3.move();
}

main();
