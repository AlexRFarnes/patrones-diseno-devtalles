/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

import { COLORS } from "../helpers/colors.ts";

class Projector {
  turnOn(): void {
    console.log("Projector: Encendiendo");
  }
  turnOff(): void {
    console.log("Projector: Apagando");
  }
  setZoom(): void {
    console.log("Projector: Configurando zoom");
  }
  setWideScreenMode(): void {
    console.log("Projector: Wide Screen Mode");
  }
}

class SoundSystem {
  on(): void {
    console.log("SoundSystem: Encendiendo");
  }
  off(): void {
    console.log("SoundSystem: Apagando");
  }
  setVolume(): void {
    console.log("SoundSystem: Configurando volumen");
  }
}

class VideoPlayer {
  on(): void {
    console.log("VideoPlayer: Encendiendo");
  }
  off(): void {
    console.log("VideoPlayer: Apagando");
  }
  play(movie: string): void {
    console.log(`VideoPlayer: Reproduciendo %c${movie}`, COLORS.yellow);
  }
  pause(): void {
    console.log("VideoPlayer: Pausando");
  }
  stop(): void {
    console.log("VideoPlayer: Deteniendo");
  }
  rewind(): void {
    console.log("VideoPlayer: Rebobinando");
  }
  fastForward(): void {
    console.log("VideoPlayer: Avance rápido");
  }
}

class PopcornPopper {
  poppingPopcorn(): void {
    console.log("PopcornPopper: Haciendo palomitas");
  }
  turningOffpoppingPopcorn(): void {
    console.log("PopcornPopper: Apagando");
  }
}

interface HomeTheaterFacadeProps {
  projector: Projector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
  popcornPopper: PopcornPopper;
}

class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
  private popcornPopper: PopcornPopper;

  constructor({
    projector,
    soundSystem,
    videoPlayer,
    popcornPopper,
  }: HomeTheaterFacadeProps) {
    this.projector = projector;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
    this.popcornPopper = popcornPopper;
  }

  watchMovie(movie: string): void {
    console.log("%cIniciando película...", COLORS.cyan);
    this.projector.turnOn();
    this.projector.setWideScreenMode();
    this.projector.setZoom();
    this.soundSystem.on();
    this.soundSystem.setVolume();
    this.videoPlayer.on();
    this.videoPlayer.play(movie);
    this.popcornPopper.poppingPopcorn();
  }

  endMovie(): void {
    console.log("%cFinalizando película...", COLORS.red);
    this.videoPlayer.stop();
    this.videoPlayer.off();
    this.soundSystem.off();
    this.popcornPopper.turningOffpoppingPopcorn();
    this.projector.turnOff();
  }
}

function main() {
  const projector = new Projector();
  const soundSystem = new SoundSystem();
  const videoPlayer = new VideoPlayer();
  const popcornPopper = new PopcornPopper();
  const homeTheaterFacade = new HomeTheaterFacade({
    projector,
    soundSystem,
    videoPlayer,
    popcornPopper,
  });

  homeTheaterFacade.watchMovie("BladeRunner");
  console.log("\n\n");
  homeTheaterFacade.endMovie();
}

main();
