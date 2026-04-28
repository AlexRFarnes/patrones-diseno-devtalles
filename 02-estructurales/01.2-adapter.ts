/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

import { COLORS } from "../helpers/colors.ts";

// 1. Interfaz PaymentProcessor
interface PaymentProcessor {
  processPayment(amount: number): void;
}

// 2. Clases de Servicios de Pago Externos
// Estas clases simulan los servicios externos de PayPal, Stripe y MercadoPago

class PayPalService {
  sendPayment(amount: number): void {
    console.log(`Procesando pago de $${amount} con %cPayPal`, COLORS.blue);
  }
}

class StripeService {
  makeCharge(amount: number): void {
    console.log(`Procesando pago de $${amount} con %cStripe`, COLORS.purple);
  }
}

class MercadoPagoService {
  pay(amount: number): void {
    console.log(
      `Procesando pago de $${amount} con %cMercadoPago`,
      COLORS.yellow,
    );
  }
}

// 3. Clases Adaptadoras

// Adaptador para PayPal
class PayPalAdapter implements PaymentProcessor {
<<<<<<< HEAD
  // TODO: Implementar la interfaz PaymentProcessor
  constructor(private service: PayPalService) {}

  processPayment(amount: number): void {
    this.service.sendPayment(amount);
=======
  private paypalService: PayPalService;

  constructor(service: PayPalService) {
    this.paypalService = service;
  }

  processPayment(amount: number): void {
    this.paypalService.sendPayment(amount);
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

// Adaptador para Stripe
class StripeAdapter implements PaymentProcessor {
<<<<<<< HEAD
  // TODO: Implementar la interfaz PaymentProcessor
  constructor(private service: StripeService) {}

  processPayment(amount: number): void {
    this.service.makeCharge(amount);
=======
  private stripeService: StripeService;

  constructor(service: StripeService) {
    this.stripeService = service;
  }

  processPayment(amount: number): void {
    this.stripeService.makeCharge(amount);
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

// Adaptador para MercadoPago
class MercadoPagoAdapter implements PaymentProcessor {
<<<<<<< HEAD
  // TODO: Implementar la interfaz PaymentProcessor
  constructor(private service: MercadoPagoService) {}

  processPayment(amount: number): void {
    this.service.pay(amount);
=======
  private mercadoPagoService: MercadoPagoService;

  constructor(service: MercadoPagoService) {
    this.mercadoPagoService = service;
  }

  processPayment(amount: number): void {
    this.mercadoPagoService.pay(amount);
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

// 4. Código Cliente para probar el Adapter

function main() {
  const paymentAmount = 100;

  // TODO: Agregar los adaptadores para los servicios de pago
  const paypalProcessor: PaymentProcessor = new PayPalAdapter(
<<<<<<< HEAD
    new PayPalService(),
  );
  const stripeProcessor: PaymentProcessor = new StripeAdapter(
    new StripeService(),
  );
  const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter(
    new MercadoPagoService(),
=======
    new PayPalService()
  );
  const stripeProcessor: PaymentProcessor = new StripeAdapter(
    new StripeService()
  );
  const mercadoPagoProcessor: PaymentProcessor = new MercadoPagoAdapter(
    new MercadoPagoService()
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  );

  // Procesar pagos con los diferentes servicios
  // Los 3 procesadores de pago trabajan exactamente igual después de adaptaros
  console.log("Usando PayPal:");
  paypalProcessor.processPayment(paymentAmount);

  console.log("\nUsando Stripe:");
  stripeProcessor.processPayment(paymentAmount);

  console.log("\nUsando MercadoPago:");
  mercadoPagoProcessor.processPayment(paymentAmount);
}

main();
