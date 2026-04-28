/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

<<<<<<< HEAD
import { COLORS } from "../helpers/colors.ts";
=======
import { COLORS } from '../helpers/colors.ts';
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266

interface Ability {
  use(): void;
}

class SwordAttack implements Ability {
  use(): void {
<<<<<<< HEAD
    console.log("Swing furiously with a %csword", COLORS.red);
  }
}

class MagicAttack implements Ability {
  use(): void {
    console.log("Cast a powerful %cmagic spell", COLORS.blue);
=======
    console.log('Ataca con una %cespada ferozmente', COLORS.blue);
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

class AxeAttack implements Ability {
  use(): void {
<<<<<<< HEAD
    console.log("Swing furiously with an %caxe", COLORS.green);
  }
}
=======
    console.log('Ataca con una %chacha brutalmente', COLORS.blue);
  }
}

class MagicSpell implements Ability {
  use(): void {
    console.log('Lanza un hechizo %cmágico poderoso', COLORS.green);
  }
}

class FireballSpell implements Ability {
  use(): void {
    console.log('Lanza una %cbola de fuego', COLORS.green);
  }
}

>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability): void {
    this.ability = ability;
  }

<<<<<<< HEAD
  abstract useAbility(): void;
}

class Warrior extends Character {
  override useAbility(): void {
    console.log("Warrior uses their ability");
=======
  abstract performAbility(): void;
}

class Warrior extends Character {
  override performAbility(): void {
    console.log('\nEl guerrero está listo para luchar');
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    this.ability.use();
  }
}

class Mage extends Character {
<<<<<<< HEAD
  override useAbility(): void {
    console.log("Mage uses their ability");
=======
  override performAbility(): void {
    console.log('\nEl mago prepara su magia');
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    this.ability.use();
  }
}

function main() {
  const warrior = new Warrior(new SwordAttack());
<<<<<<< HEAD
  warrior.useAbility();

  warrior.setAbility(new AxeAttack());
  warrior.useAbility();

  const mage = new Mage(new MagicAttack());
  mage.useAbility();
=======
  warrior.performAbility();

  warrior.setAbility(new AxeAttack());
  warrior.performAbility();

  const mage = new Mage(new FireballSpell());
  mage.performAbility();
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
}

main();
