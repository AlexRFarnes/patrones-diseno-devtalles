/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece
 * una relación de uno a muchos entre un objeto, llamado sujeto,
 * y otros objetos, llamados observadores, que son notificados
 * y actualizados automáticamente por el sujeto
 * cuando se producen cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén
 * * pendientes de los cambios
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

import { COLORS } from "../helpers/colors.ts";

interface Observer {
  notify(videoTitle: string): void;
}

class YoutubeChannel {
  private subscribers: Observer[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  subscribe(observer: Observer): void {
    this.subscribers.push(observer);
    console.log(`Nuevo suscriptor a %c${this.name}`, COLORS.green);
  }

  unsubscribe(observer: Observer): void {
    this.subscribers = this.subscribers.filter(o => o !== observer);
    console.log(
      `%cUn suscriptor se ha dado de baja de ${this.name}`,
      COLORS.red,
    );
  }

  uploadVideo(videoTitle: string): void {
    console.log(
      `${this.name} ha subido un nuevo video: %c${videoTitle}`,
      COLORS.blue,
    );

    this.subscribers.forEach(observer => observer.notify(videoTitle));
  }
}

class Subscriber implements Observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  notify(videoTitle: string): void {
    console.log(
      `%c${this.name} %cha recibido una notificación de un nuevo video: %c${videoTitle}`,
      COLORS.yellow,
      COLORS.white,
      COLORS.blue,
    );
  }
}

function main() {
  const channel = new YoutubeChannel("DevTalles");

  const user1 = new Subscriber("Juan");
  const user2 = new Subscriber("Pedro");
  const user3 = new Subscriber("Maria");

  channel.subscribe(user1);
  channel.subscribe(user2);

  channel.uploadVideo("Patrón Observer");

  channel.subscribe(user3);

  channel.unsubscribe(user2);

  channel.uploadVideo("React Hooks");

  console.log("\n\n");
}

main();
