/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";

class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
    }
    return DragonBalls.instance;
  }

  public collectBall(): void {
    if (this.ballsCollected < 7) {
      this.ballsCollected++;
      console.log(`Has recolectado la esfera ${this.ballsCollected}`);
      return;
    }
    console.log("Ya has recolectado todas las 7 esferas del dragón");
  }

  public summonShenLong(): void {
    if (this.ballsCollected === 7) {
      console.log("Shen Long ha sido invocado, pide tu deseo");
      this.ballsCollected = 0;
      return;
    }
    console.log(
      `Aun no tienes las 7 esferas del dragón, necesitas recolectar ${7 - this.ballsCollected} más`,
    );
  }

  public displayBallsCollected(): void {
    console.log(`Bolas recolectadas: ${this.ballsCollected}`);
  }
}

function main() {
  const gokuDragonBalls = DragonBalls.getInstance();
  const vegetaDragonBalls = DragonBalls.getInstance();

  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();
  gokuDragonBalls.collectBall();

  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();
  vegetaDragonBalls.collectBall();

  console.log("%cGoku: ", COLORS.green);
  gokuDragonBalls.displayBallsCollected();
  console.log("%cVegeta: ", COLORS.red);
  vegetaDragonBalls.displayBallsCollected();

  gokuDragonBalls.summonShenLong();
  vegetaDragonBalls.summonShenLong();
}

main();
