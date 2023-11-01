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

class Heroe extends Persona {
  afiliacion = "sin afiliacion";
  constructor(nombre, apellido, edad, afiliacion) {
    super(nombre, apellido, edad);
    this.afiliacion = afiliacion;
  }
}

const spiderman = new Heroe("Peter", "Parker", 25, "Vengadores");
spiderman.setDomicilio = "Nueva York";
console.log(spiderman);
spiderman.imprimir();
