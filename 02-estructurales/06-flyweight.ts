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

import { COLORS } from "../helpers/colors.ts";

interface Location {
  display(coordinates: { x: number; y: number }): void;
}

// Flyweight
class LocationIcon implements Location {
  private type: string; // "house", "school", "hospital", etc.
  private iconImage: string; // "house.png", "school.png", "hospital.png", etc.

  constructor(type: string, iconImage: string) {
    this.type = type;
    this.iconImage = iconImage;
  }

  display(coordinates: { x: number; y: number }): void {
    console.log(
      `Coordenadas: ${this.type} ${coordinates.x}, ${coordinates.y} con icono %c[${this.iconImage}]`,
      COLORS.blue,
    );
  }
}

// Factory Flyweight
class LocationFactory {
  private icons: Record<string, LocationIcon> = {};

  getLocationIcon(type: string): LocationIcon {
    if (!this.icons[type]) {
      console.log(`%cCreando icono de ${type}`, COLORS.red);
      const iconImage = `imagen_de_${type.toLowerCase()}.png`;
      this.icons[type] = new LocationIcon(type, iconImage);
    }
    return this.icons[type];
  }
}

class MapLocation {
  private coordinates: { x: number; y: number };
  private icon: LocationIcon;

  constructor(coordinates: { x: number; y: number }, icon: LocationIcon) {
    this.coordinates = coordinates;
    this.icon = icon;
  }

  display(): void {
    this.icon.display(this.coordinates);
  }
}

function main() {
  const factory = new LocationFactory();
  const locations = [
    new MapLocation({ x: 10, y: 20 }, factory.getLocationIcon("hospital")),
    new MapLocation({ x: -10, y: -20 }, factory.getLocationIcon("hospital")),
    new MapLocation({ x: 352, y: 100 }, factory.getLocationIcon("escuela")),
    new MapLocation({ x: -100, y: -200 }, factory.getLocationIcon("escuela")),
  ];

  locations.forEach(location => location.display());
}

main();
