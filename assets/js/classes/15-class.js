/* Esta es la sintaxis correcta para las clases (POO)*/
class Persona {
  nombre;
  apellido;
  edad;
  domicilio;

  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  set setDomicilio(domicilio) {
    this.domicilio = domicilio.toUpperCase();
  }

  get getDomicilio() {
    return `Domicilio: ${this.domicilio}`;
  }

  /* Esta es la manera de crear métodos dentro de clases */
  imprimir() {
    console.log(
      `Nombre: ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad}`
    );
  }
}

/* Crear una instancia de la clase */
const sebastian = new Persona("Sebastián", "Álava", 24);
const omar = new Persona("Omar", "Benavides", 25);

/* Llamar a los métodos de las clases */
sebastian.imprimir();
//omar.imprimir();
sebastian.setDomicilio = "Sur de Quito";

console.log(sebastian.getDomicilio);
