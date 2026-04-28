/**
 * ! Patrón Flyweight
 * Es un patrón de diseño estructural que nos permite usar objetos compartidos
 * para soportar eficientemente grandes cantidades de objetos.
 *
 * * Es útil cuando necesitamos una gran cantidad de objetos y queremos reducir
 * * la cantidad de memoria que utilizan.
 *
 * https://refactoring.guru/es/design-patterns/flyweight
 */

<<<<<<< HEAD
import { COLORS } from "../helpers/colors.ts";
=======
import { COLORS } from '../helpers/colors.ts';
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266

interface Location {
  display(coordinates: { x: number; y: number }): void;
}

// Flyweight
class LocationIcon implements Location {
<<<<<<< HEAD
  private type: string; // "house", "school", "hospital", etc.
  private iconImage: string; // "house.png", "school.png", "hospital.png", etc.
=======
  private type: string; // hospital, escuela, parque
  private iconImage: string; // imagen del marcador
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266

  constructor(type: string, iconImage: string) {
    this.type = type;
    this.iconImage = iconImage;
  }

  display(coordinates: { x: number; y: number }): void {
    console.log(
<<<<<<< HEAD
      `Coordenadas: ${this.type} ${coordinates.x}, ${coordinates.y} con icono %c[${this.iconImage}]`,
      COLORS.blue,
=======
      `Coords: ${this.type} en ${coordinates.x}, ${coordinates.y} con ícono %c[${this.iconImage}]`,
      COLORS.green
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    );
  }
}

<<<<<<< HEAD
// Factory Flyweight
class LocationFactory {
  private icons: Record<string, LocationIcon> = {};

  getLocationIcon(type: string): LocationIcon {
    if (!this.icons[type]) {
      console.log(`%cCreando icono de ${type}`, COLORS.red);
      const iconImage = `imagen_de_${type.toLowerCase()}.png`;
      this.icons[type] = new LocationIcon(type, iconImage);
    }
=======
// Fábrica de Flyweights
// {
//   escuela: assets/school.png,
//   hospital: assets/hospital.png,
// }

class LocationFactory {
  private icons: Record<string, LocationIcon> = {};

  // Escuela, hospital, parque,
  getLocationIcon(type: string): LocationIcon {
    if (!this.icons[type]) {
      console.log(`%cCreando una instancia del ícono de ${type}`, COLORS.red);
      const iconImage = `imagen_de_${type.toLowerCase()}.png`;
      this.icons[type] = new LocationIcon(type, iconImage);
    }

>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    return this.icons[type];
  }
}

class MapLocation {
  private coordinates: { x: number; y: number };
  private icon: LocationIcon;

<<<<<<< HEAD
  constructor(coordinates: { x: number; y: number }, icon: LocationIcon) {
    this.coordinates = coordinates;
    this.icon = icon;
  }

  display(): void {
=======
  constructor(x: number, y: number, icon: LocationIcon) {
    this.coordinates = { x, y };
    this.icon = icon;
  }

  display() {
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
    this.icon.display(this.coordinates);
  }
}

function main() {
  const factory = new LocationFactory();
<<<<<<< HEAD
  const locations = [
    new MapLocation({ x: 10, y: 20 }, factory.getLocationIcon("hospital")),
    new MapLocation({ x: -10, y: -20 }, factory.getLocationIcon("hospital")),
    new MapLocation({ x: 352, y: 100 }, factory.getLocationIcon("escuela")),
    new MapLocation({ x: -100, y: -200 }, factory.getLocationIcon("escuela")),
  ];

  locations.forEach(location => location.display());
=======

  const locations = [
    new MapLocation(10, 20, factory.getLocationIcon('hospital')),
    new MapLocation(20, 40, factory.getLocationIcon('hospital')),
    new MapLocation(30, 60, factory.getLocationIcon('hospital')),

    new MapLocation(35, 65, factory.getLocationIcon('parque')),
    new MapLocation(35, 65, factory.getLocationIcon('parque')),
    new MapLocation(35, 65, factory.getLocationIcon('parque')),
    new MapLocation(35, 65, factory.getLocationIcon('parque')),
    new MapLocation(35, 65, factory.getLocationIcon('parque')),
    new MapLocation(35, 65, factory.getLocationIcon('parque')),
    new MapLocation(35, 65, factory.getLocationIcon('parque')),

    new MapLocation(30, 60, factory.getLocationIcon('hospital')),
    new MapLocation(30, 60, factory.getLocationIcon('hospital')),
    new MapLocation(30, 60, factory.getLocationIcon('hospital')),
    new MapLocation(30, 60, factory.getLocationIcon('hospital')),

    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
    new MapLocation(30, 60, factory.getLocationIcon('Escuela')),
  ];

  locations.forEach((location) => location.display());
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
}

main();
