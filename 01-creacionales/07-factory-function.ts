/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

import { COLORS } from "../helpers/colors.ts";

type Language = "es" | "en" | "pt";

// i18n
function createGreeter(lang: Language) {
  return function (name: string) {
    const messages = {
      es: `¡Hola, %c${name}!`,
      en: `Hello, %c${name}!`,
      pt: `Olá, %c${name}!`,
    };
    return messages[lang];
  };
}

function main() {
  const greeterEs = createGreeter("es");
  const greeterEn = createGreeter("en");
  const greeterPt = createGreeter("pt");

  console.log(greeterEs("Carlos"), COLORS.green);
  console.log(greeterEn("Carlos"), COLORS.blue);
  console.log(greeterPt("Carlos"), COLORS.red);
}

main();
