/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface FileSystemComponent {
  showDetails(indent?: string): void;
}

class File implements FileSystemComponent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  showDetails(indent?: string): void {
    console.log(`%c${indent}- Archivo: ${this.name}`, COLORS.green);
  }
}

class Directory implements FileSystemComponent {
  private name: string;
  private content: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  showDetails(indent: string = ""): void {
    console.log(`%c${indent}+ Directorio: ${this.name}`, COLORS.blue);
    this.content.forEach(component => component.showDetails(indent + " "));
  }

  add(component: FileSystemComponent): void {
    this.content.push(component);
  }
}

function main() {
  const file1 = new File("archivo1.txt");
  const file2 = new File("archivo2.txt");
  const file3 = new File("archivo3.txt");
  const file4 = new File("archivo4.txt");
  const file5 = new File("archivo5.txt");

  const dir1 = new Directory("directorio1");
  const dir2 = new Directory("directorio2");
  const dir3 = new Directory("directorio3");

  dir1.add(file1);
  dir1.add(file2);

  dir2.add(file3);
  dir2.add(dir3);

  dir3.add(file4);

  const root = new Directory("root");
  root.add(dir1);
  root.add(dir2);
  root.add(file5);

  root.showDetails();
}

main();
