/*
pilares de la programacion orientada a objetos

los paradgmas principalmente que dan paso a la POO son con estado, juto con el imperativo y el declarativo

pilares de la programacion orientada a objetos
abstraccion: oculta detallas internos y muestra las caracteristicas relevantes.

encapsulamiento: protege los datos de un objeto para evitar accesos indebidos promoviendo el uso de metodos publicos para interactuar con ellos.

herencia: permite que una clase reutilice los atributos y metodos de otra, promoviendo la extension y personalizacion.

polimorfismo: habilidad de un metiodo o funcion para comportarse de diferentes maneras segun el objeto o los argumentos con los que interactuas.

*/

class vehiculo {
  constructor(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.encendido = false;
  }
  encender() {
    this.encendido = true;
    console.log(`${this.marca} ${this.modelo} esta encendido.`);
  }
  apagar() {
    this.encendido = false;
    console.log(`${this.marca} ${this.modelo} esta apagado. `);
  }
  tocarBocina() {
    this.encendido = false;
    console.log("¡beep beep!");
  }
  MostrarInfo() {
    console.log(
      `vehiculo: ${this.marca} ${this.modelo} (${this.anio}) - color: ${this.color}`
    );
  }
}

// crear instancia
const miAuto = new vehiculo("toyota", "corolla", "rojo", 2020);

// probar los metodos
miAuto.MostrarInfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

// clase animal
class animal {
  constructor(nombre, especie, sonido) {
    this.nombre = nombre;
    this.especie = especie;
    this.sonido = sonido;
  }
  hacerSonido() {
    console.log(`${this.nombre} dice: ${this.sonido}`);
  }
  describir() {
    console.log(`${this.nombre} dice: ${this.esepecie}`);
  }
}

// crear instancia
const miperro = new animal("bruno", "perro", "guao, guao");
const miGato = new animal("karin", "gato", "miauuuw");

// probar los metodos
miperro.describir();
miperro.hacerSonido();

miGato.describir();
miGato.hacerSonido();

const auto = new vehiculo("ford", "mustang", "azul", 2020);
miAuto.MostrarInfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

const perro = new animal("rex", "perro", "guao, guao");
miperro.describir();
miperro.hacerSonido();

const gato = new animal("Polola", "gato", "miauuuw");
miGato.describir();
miGato.hacerSonido();
