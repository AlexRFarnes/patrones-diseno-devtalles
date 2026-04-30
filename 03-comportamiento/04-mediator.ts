/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */

import { COLORS } from "../helpers/colors.ts";

class User {
  private username: string;
  private chatRoom: ChatRoom;

  constructor(username: string, chatRoom: ChatRoom) {
    this.username = username;
    this.chatRoom = chatRoom;

    chatRoom.addUser(this);
  }

  sendMessage(message: string) {
    console.log(
      `\n\n%c${this.username} sends message: %c${message}`,
      COLORS.green,
      COLORS.white,
    );
    this.chatRoom.sendMessage(this, message);
  }

  receiveMessage(sender: User, message: string) {
    console.log(
      `%c${this.username} received message from %c${sender.username}: %c${message}`,
      COLORS.cyan,
      COLORS.white,
      COLORS.blue,
    );
  }
}

class ChatRoom {
  private users: User[] = [];
  public title: string;

  constructor(title: string) {
    this.title = title;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  sendMessage(sender: User, message: string) {
    const usersToSend = this.users.filter(user => user !== sender);
    for (const user of usersToSend) {
      user.receiveMessage(sender, message);
    }
  }
}

function main() {
  const chatRoom = new ChatRoom("General");
  const user1 = new User("John", chatRoom);
  const user2 = new User("Jane", chatRoom);
  const user3 = new User("Jim", chatRoom);

  user1.sendMessage("Hello, everyone!");
  user2.sendMessage("Hi, John!");
  user3.sendMessage("Hey, guys!");
}

main();
