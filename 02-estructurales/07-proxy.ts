/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

import { COLORS } from "../helpers/colors.ts";

class Player {
  name: string;
  level: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }
}

interface Room {
  enter(player: Player): void;
}

class SecretRoom implements Room {
  enter(player: Player): void {
    console.log(`%c${player.name} ha entrado a la sala secreta`, COLORS.green);
  }
}

class MagicPortal implements Room {
  private secretRoom: Room;

  constructor(secretRoom: Room) {
    this.secretRoom = secretRoom;
  }

  enter(player: Player): void {
    if (player.level >= 10) {
      this.secretRoom.enter(player);
      return;
    }
    console.log(
      `%c${player.name} no tiene nivel suficiente para entrar a la sala secreta`,
      COLORS.red,
    );
  }
}

function main() {
  const magicPortal = new MagicPortal(new SecretRoom());
  const player = new Player("John", 10);
  magicPortal.enter(player);
  const player2 = new Player("Jane", 5);
  magicPortal.enter(player2);
}

main();
