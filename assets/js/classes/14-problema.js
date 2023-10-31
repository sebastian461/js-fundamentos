/* Esta era la manera en la que se podían construir objetos que requieren de las mismas propiedades
(repetir) */
const sebastian = {
  nombre: "Sebastián",
  edad: 24,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

const omar = {
  nombre: "Omar",
  edad: 25,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

/* Se solucionó agregando clases y la palabra privada 'new', actualmente tampoco es una solución efectiva */

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  };
}

const stalin = new Persona("Stalin", 21);
const noe = new Persona("Noe", 21);

stalin.imprimir();
noe.imprimir();
