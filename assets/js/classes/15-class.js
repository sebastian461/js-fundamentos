/* Esta es la sintaxis correcta para las clases (POO)*/
class Persona {
  nombre;
  apellido;
  edad;

  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

/* Crear una instancia de la clase */
const sebastian = new Persona("Sebastián", "Álava", 24);
console.log(sebastian);
