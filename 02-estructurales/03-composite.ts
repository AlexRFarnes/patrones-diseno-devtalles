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

<<<<<<< HEAD
import { COLORS } from "../helpers/colors.ts";

=======
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
interface FileSystemComponent {
  showDetails(indent?: string): void;
}

class File implements FileSystemComponent {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  showDetails(indent?: string): void {
<<<<<<< HEAD
    console.log(`%c${indent}- Archivo: ${this.name}`, COLORS.green);
  }
}

class Directory implements FileSystemComponent {
  private name: string;
  private content: FileSystemComponent[] = [];
=======
    console.log(`${indent}- Archivo: ${this.name}`);
  }
}

class Folder implements FileSystemComponent {
  private name: string;
  private contents: FileSystemComponent[] = [];
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266

  constructor(name: string) {
    this.name = name;
  }

<<<<<<< HEAD
  showDetails(indent: string = ""): void {
    console.log(`%c${indent}+ Directorio: ${this.name}`, COLORS.blue);
    this.content.forEach(component => component.showDetails(indent + " "));
  }

  add(component: FileSystemComponent): void {
    this.content.push(component);
=======
  add(component: FileSystemComponent) {
    this.contents.push(component);
  }

  showDetails(indent: string = ''): void {
    console.log(`${indent}+ Carpeta: ${this.name}`);
    this.contents.forEach((component) => component.showDetails(indent + ' '));
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
  }
}

function main() {
<<<<<<< HEAD
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
=======
  const file1 = new File('archivo1.txt');
  const file2 = new File('archivo2.txt');
  const file3 = new File('archivo3.txt');
  const file4 = new File('archivo4.txt');

  const folder1 = new Folder('Carpeta 1');
  const folder5 = new Folder('Carpeta 5');

  folder1.add(file1);
  folder1.add(file2);

  const folder2 = new Folder('Carpeta 2');
  folder2.add(file3);

  const folder3 = new Folder('Carpeta 3');
  folder3.add(file4);
  folder2.add(folder3);
  folder2.add(folder5);

  const rootFolder = new Folder('Carpeta ROOT');

  rootFolder.add(folder1);
  rootFolder.add(folder2);

  rootFolder.showDetails();
>>>>>>> 39c5bdfe6437dd88ffe1b6c7d069418ce4733266
}

main();
