/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */

class GameMememto {
  private level: number;
  private health: number;
  private position: string;

  constructor(level: number, health: number, position: string) {
    this.level = level;
    this.health = health;
    this.position = position;
  }

  getLevel(): number {
    return this.level;
  }

  getHealth(): number {
    return this.health;
  }

  getPosition(): string {
    return this.position;
  }
}

class Game {
  private level: number = 1;
  private health: number = 100;
  private position: string = "inicio";

  constructor() {
    console.log(
      `Juego iniciado con nivel ${this.level}, salud ${this.health} y posición ${this.position}`,
    );
  }

  saveGame(): GameMememto {
    return new GameMememto(this.level, this.health, this.position);
  }

  play(level: number, health: number, position: string): void {
    this.level = level;
    this.health = health;
    this.position = position;

    console.log(
      `Juego jugado con nivel ${this.level}, salud ${this.health} y posición ${this.position}`,
    );
  }

  restore(state: GameMememto): void {
    this.level = state.getLevel();
    this.health = state.getHealth();
    this.position = state.getPosition();

    console.log(
      `Juego cargado con nivel ${this.level}, salud ${this.health} y posición ${this.position}`,
    );
  }
}

class GameHistory {
  private gameStates: GameMememto[] = [];

  push(state: GameMememto): void {
    this.gameStates.push(state);
  }

  pop(): GameMememto | null {
    return this.gameStates.pop() ?? null;
  }
}

function main() {
  const game = new Game();
  const gameHistory = new GameHistory();

  gameHistory.push(game.saveGame());

  game.play(2, 90, "nivel 2");
  gameHistory.push(game.saveGame());

  game.play(3, 80, "nivel 3");
  gameHistory.push(game.saveGame());

  game.restore(gameHistory.pop()!);
  game.restore(gameHistory.pop()!);
}

main();
