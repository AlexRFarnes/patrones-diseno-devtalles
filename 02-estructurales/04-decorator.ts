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

<<<<<<< HEAD
import { COLORS } from "../helpers/colors.ts";
=======
import { COLORS } from '../helpers/colors.ts';
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266

interface Notification {
  send(message: string): void;
}

class BasicNotification implements Notification {
  send(message: string): void {
    console.log(
<<<<<<< HEAD
      `%cSending basic notification: %c${message}`,
      COLORS.green,
      COLORS.white,
=======
      `%cEnviando notificación básica: %c${message}`,
      COLORS.blue,
      COLORS.white
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    );
  }
}

<<<<<<< HEAD
// Decorator
=======
// Clase decoradora
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
abstract class NotificationDecorator implements Notification {
  protected notification: Notification;

  constructor(notification: Notification) {
    this.notification = notification;
  }

  send(message: string): void {
    this.notification.send(message);
  }
}

<<<<<<< HEAD
class EmailDecorator extends NotificationDecorator {
  private sendEmail(message: string): void {
    console.log(
      `%cSending email notification: %c${message}`,
      COLORS.blue,
      COLORS.white,
=======
// Crear diferentes decoradores
class EmailDecorator extends NotificationDecorator {
  private sendEmail(message: string) {
    console.log(
      `%cEnviando notificación por correo electrónico:%c${message}`,
      COLORS.green,
      COLORS.white
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    );
  }

  override send(message: string): void {
    super.send(message);
    this.sendEmail(message);
  }
}

class SMSDecorator extends NotificationDecorator {
<<<<<<< HEAD
  private sendSMS(message: string): void {
    console.log(
      `%cSending SMS notification: %c${message}`,
      COLORS.yellow,
      COLORS.white,
=======
  private sendSMS(message: string) {
    console.log(
      `%cEnviando notificación por SMS: %c${message}`,
      COLORS.red,
      COLORS.white
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    );
  }

  override send(message: string): void {
    super.send(message);
    this.sendSMS(message);
  }
}

<<<<<<< HEAD
class PushNotificationDecorator extends NotificationDecorator {
  private sendPushNotification(message: string): void {
    console.log(
      `%cSending push notification: %c${message}`,
      COLORS.purple,
      COLORS.white,
    );
  }

  override send(message: string): void {
    super.send(message);
    this.sendPushNotification(message);
  }
}

function main() {
  let notification: Notification = new BasicNotification();
  notification = new EmailDecorator(notification);
  notification = new SMSDecorator(notification);
  notification = new PushNotificationDecorator(notification);
  notification.send("Alerta de sistema");
=======
function main() {
  let notification: Notification = new BasicNotification();

  notification = new EmailDecorator(notification);
  notification = new SMSDecorator(notification);

  notification.send('Alerta de sistema!');
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
}

main();
