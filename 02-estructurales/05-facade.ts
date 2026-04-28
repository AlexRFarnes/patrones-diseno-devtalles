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

<<<<<<< HEAD
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
=======
import { COLORS } from '../helpers/colors.ts';

class Projector {
  turnOn() {
    console.log('Proyector encendido');
  }

  turnOff() {
    console.log('Proyecto apagado');
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

class SoundSystem {
<<<<<<< HEAD
  on(): void {
    console.log("SoundSystem: Encendiendo");
  }
  off(): void {
    console.log("SoundSystem: Apagando");
  }
  setVolume(): void {
    console.log("SoundSystem: Configurando volumen");
=======
  on() {
    console.log('Sistema de sonido encendido');
  }

  off() {
    console.log('Sistema de sonido apagado');
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

class VideoPlayer {
<<<<<<< HEAD
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
=======
  on() {
    console.log('Video player encendido');
  }

  play(movie: string) {
    console.log(`Reproduciendo %c${movie}`, COLORS.blue);
  }

  stop() {
    console.log('Película detenida');
  }

  off() {
    console.log('Video player apagado');
  }
}

class PopcornMaker {
  poppingPopcorn() {
    console.log('Haciendo palomitas');
  }

  turnOffPoppingPopcorn() {
    console.log('Deteniendo las palomitas');
  }
}

interface HomeTheaterFacadeOptions {
  projector: Projector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
  popcornMaker: PopcornMaker;
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
}

class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
<<<<<<< HEAD
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
=======
  private popcornMaker: PopcornMaker;

  constructor({
    popcornMaker,
    projector,
    soundSystem,
    videoPlayer,
  }: HomeTheaterFacadeOptions) {
    this.projector = projector;
    this.popcornMaker = popcornMaker;
    this.videoPlayer = videoPlayer;
    this.soundSystem = soundSystem;
  }

  watchMovie(movie: string): void {
    console.log('%cPreparando para ver la película', COLORS.blue);
    this.projector.turnOn();
    this.soundSystem.on();
    this.popcornMaker.poppingPopcorn();
    this.videoPlayer.on();
    this.videoPlayer.play(movie);

    console.log('%cDisfrute la película', COLORS.blue);
  }

  endWatchingMovie(): void {
    console.log('%c\n\nPreparando para detener la película', COLORS.blue);
    this.projector.turnOff();
    this.soundSystem.off();
    this.popcornMaker.turnOffPoppingPopcorn();
    this.videoPlayer.stop();
    this.videoPlayer.off();

    console.log('%cSistema apagado\n', COLORS.blue);
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

function main() {
  const projector = new Projector();
  const soundSystem = new SoundSystem();
  const videoPlayer = new VideoPlayer();
<<<<<<< HEAD
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
=======
  const popcornMaker = new PopcornMaker();

  const homeTheater = new HomeTheaterFacade({
    projector,
    soundSystem,
    videoPlayer,
    popcornMaker,
  });

  homeTheater.watchMovie('Los Avengers');

  homeTheater.endWatchingMovie();
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
}

main();
