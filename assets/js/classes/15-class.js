/* Esta es la sintaxis correcta para las clases (POO)*/
class Persona {
  /* Las propiedades estáticas son propias de la clase y no de las instancias */
  static conteo = 0;

  /* También se pueden defenir métodos estaticos, incluidos get y set */
  static get getConteo() {
    return `${Persona.conteo} instancias`;
  }

  static mensaje() {
    console.log("Llamada a un método estático");
  }

  nombre;
  apellido;
  edad;
  domicilio;

  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    /* No se usa la palabra reservada 'this' porque no es una instancia de la clase sino de la clase */
    Persona.conteo++;
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
console.log("Conteo estático: ", Persona.conteo); //Dependera de cuantas veces haya sido llamado el constructor
console.log(Persona.getConteo);
Persona.mensaje();
