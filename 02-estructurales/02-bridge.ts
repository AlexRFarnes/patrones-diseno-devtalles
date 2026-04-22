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

import { COLORS } from "../helpers/colors.ts";

interface Ability {
  use(): void;
}

class SwordAttack implements Ability {
  use(): void {
    console.log("Swing furiously with a %csword", COLORS.red);
  }
}

class MagicAttack implements Ability {
  use(): void {
    console.log("Cast a powerful %cmagic spell", COLORS.blue);
  }
}

class AxeAttack implements Ability {
  use(): void {
    console.log("Swing furiously with an %caxe", COLORS.green);
  }
}
abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability): void {
    this.ability = ability;
  }

  abstract useAbility(): void;
}

class Warrior extends Character {
  override useAbility(): void {
    console.log("Warrior uses their ability");
    this.ability.use();
  }
}

class Mage extends Character {
  override useAbility(): void {
    console.log("Mage uses their ability");
    this.ability.use();
  }
}

function main() {
  const warrior = new Warrior(new SwordAttack());
  warrior.useAbility();

  warrior.setAbility(new AxeAttack());
  warrior.useAbility();

  const mage = new Mage(new MagicAttack());
  mage.useAbility();
}

main();
