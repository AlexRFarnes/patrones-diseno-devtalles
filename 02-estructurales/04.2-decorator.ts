/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

// 1. Interfaz Character
interface Character {
  getDescription(): string;
  getStats(): { attack: number; defense: number };
}

// 2. Clase BasicCharacter
// Representa un personaje básico sin accesorios
<<<<<<< HEAD
class BasicCharacter implements Character {
  // getDescription: return 'Personaje básico';
  getDescription(): string {
    return "Personaje básico";
=======
// TODO: Implementar la interfaz Character
class BasicCharacter implements Character {
  getDescription(): string {
    return 'Personaje básico';
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }

  getStats(): { attack: number; defense: number } {
    return { attack: 10, defense: 10 };
  }
}

// 3. Clase Decoradora CharacterDecorator
// Actúa como base para los decoradores específicos
abstract class CharacterDecorator implements Character {
  protected character: Character;
<<<<<<< HEAD
  protected character: Character;
=======
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266

  constructor(character: Character) {
    this.character = character;
  }
<<<<<<< HEAD
  constructor(character: Character) {
    this.character = character;
  }

  getDescription(): string {
    return this.character.getDescription();
    return this.character.getDescription();
=======

  getDescription(): string {
    return this.character.getDescription();
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }

  getStats(): { attack: number; defense: number } {
    return this.character.getStats();
<<<<<<< HEAD
    return this.character.getStats();
=======
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

// 4. Decorador Concreto HelmetDecorator
// Añade un casco que aumenta la defensa en +5
class HelmetDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + "\n * con Casco";
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 5 };
  }
}

// 5. Decorador Concreto ShieldDecorator
// Añade un escudo que aumenta la defensa en +10
class ShieldDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + "\n * con Escudo";
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 10 };
  }
}

// 6. Decorador Concreto SwordDecorator
// Añade una espada que aumenta el ataque en +7
class SwordDecorator extends CharacterDecorator {
  override getDescription(): string {
    return this.character.getDescription() + "\n * con Espada";
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack + 7, defense: stats.defense };
  }
}

// class RingDecorator ...
class RingDecorator extends CharacterDecorator {
  override getDescription(): string {
<<<<<<< HEAD
    return this.character.getDescription() + "\n * con Anillo";
=======
    return this.character.getDescription() + '\n * con Anillo';
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }

  override getStats(): { attack: number; defense: number } {
    const stats = this.character.getStats();
    return { attack: stats.attack + 3, defense: stats.defense };
  }
}

// 7. Código Cliente para Probar el Decorador

function main() {
  // Crear un personaje básico
  let character: Character = new BasicCharacter();
  console.log("\nPersonaje inicial:", character.getDescription());
  console.log("Estadísticas:", character.getStats());

  // Añadir un casco al personaje
  character = new HelmetDecorator(character);
  console.log("\nCon Casco:", character.getDescription());
  console.log("Estadísticas:", character.getStats());

  // Añadir un escudo al personaje
  character = new ShieldDecorator(character);
  console.log("\nCon Escudo:", character.getDescription());
  console.log("Estadísticas:", character.getStats());

  // Añadir una espada al personaje
  character = new SwordDecorator(character);
  console.log("\nCon Espada:", character.getDescription());
  console.log("Estadísticas:", character.getStats());

  character = new RingDecorator(character);
  console.log("\nCon Anillo:", character.getDescription());
  console.log("Estadísticas:", character.getStats());

  console.log("\n\n");
}

main();
