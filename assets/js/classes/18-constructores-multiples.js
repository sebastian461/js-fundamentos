/* 
JS no tolera multiples constructores pero el uso de variables 
estaticas permite hacerlo de cierta manera
 */
class Persona {
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre = "Sebastián",
  apellido = "Álava",
  pais = "Ecuador";

const sebastian = {
  nombre: "Sebastián",
  apellido: "Álava",
  pais: "Ecuador",
};

const persona = new Persona(nombre, apellido, pais);
const persona2 = Persona.porObjeto(sebastian);
persona.getInfo();
persona2.getInfo();
