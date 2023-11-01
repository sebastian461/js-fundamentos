/* Los objetos se inicializan con llaves y tienen pares de valores (propiedad: valor) */
let personaje = {
  nombre: "Peter Parker",
  alias: "Spider-man",
  vivo: true,
  edad: 25,
  domicilio: {
    pais: "USA",
    ciudad: "Nueva York",
  },
  afiliaciones: ["Vengadores", "4 fantasticos"],
};

console.log(personaje);
/* Dos maneras distintas de acceder a las propiedades del objeto */
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje["nombre"]);

console.log("No. afiliaciones:", personaje.afiliaciones.length);

const x = "edad";
console.log("Edad:", personaje[x]);

/* MÁS DETALLES */
delete personaje.domicilio; //elimina la propiedad del objeto
console.log(personaje);

const entriesPares = Object.entries(personaje); //convierte el arreglo pares de arreglos
console.log(entriesPares);

personaje.casado = true; //la manera de definir una nueva propiedad al objeto
console.log(personaje);

Object.freeze(personaje); //evita que el objeto sea mutable

const propiedades = Object.getOwnPropertyNames(personaje); //devuelve un arreglo con las propiedades del objeto
console.log({ propiedades });

const valores = Object.values(personaje); //devuelve un arreglo con los valores de las propiedades del objeto
console.log({ valores });
