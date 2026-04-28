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

<<<<<<< HEAD
import { COLORS } from "../helpers/colors.ts";
=======
import { COLORS } from '../helpers/colors.ts';
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266

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
<<<<<<< HEAD
    console.log(`%c${player.name} ha entrado a la sala secreta`, COLORS.green);
  }
}

class MagicPortal implements Room {
  private secretRoom: Room;

  constructor(secretRoom: Room) {
    this.secretRoom = secretRoom;
=======
    console.log(`%cBienvenido a la sala secreta, ${player.name}`, COLORS.blue);
    console.log(`Una gran enemigo te espera`);
  }
}

// 3. Clase Proxy - Magic Portal
class MagicPortal implements Room {
  private secretRom: Room;

  constructor(room: Room) {
    this.secretRom = room;
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }

  enter(player: Player): void {
    if (player.level >= 10) {
<<<<<<< HEAD
      this.secretRoom.enter(player);
      return;
    }
    console.log(
      `%c${player.name} no tiene nivel suficiente para entrar a la sala secreta`,
      COLORS.red,
=======
      this.secretRom.enter(player);
      return;
    }

    console.log(
      `%cLo siento mucho ${player.name}, Tu nivel ${player.level}, es muy bajo, necesitas nivel 10`,
      COLORS.red
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    );
  }
}

function main() {
<<<<<<< HEAD
  const magicPortal = new MagicPortal(new SecretRoom());
  const player = new Player("John", 10);
  magicPortal.enter(player);
  const player2 = new Player("Jane", 5);
  magicPortal.enter(player2);
=======
  const portal = new MagicPortal(new SecretRoom()); // Proxy

  const player1 = new Player('Aventurero A', 5);
  const player2 = new Player('Aventurero B', 15);

  console.log('%cAventurero A intenta entrar al portal', COLORS.blue);
  portal.enter(player1);

  console.log('%c\nAventurero B intenta entrar al portal', COLORS.blue);
  portal.enter(player2);
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
}

main();
