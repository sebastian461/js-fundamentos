/* Cuando se pasa argumentos para crear objetos, 
se puede hacer de estas dos formas (al retornar objetos se envuelven en parentesis) */
const crearPersona = (nombre, apellido) => ({
  nombre: nombre,
  apellido: apellido,
});
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

console.log(crearPersona("Sebastián", "Álava"));
console.log(crearPersona2("Sebastián", "Álava"));

/* Las funciones tradicionales pueden acceder a la variable 'arguments' en caso de que se le envien argumentos */
function argumentos() {
  console.log(arguments);
}

argumentos(10, true, "Sebastián");

/* Para acceder a los argumentos en una función de flecha se define una variable con el operador rest(...) */
const argumentos2 = (...arg) => {
  console.log(arg);
  return arg;
};

/* Cuando una función retorna un arreglo y se necesita acceder o utilizar los elementos del arreglo
se pueden definir de la siguiente manera */
const [edad, estado, nombre] = argumentos2(10, true, "Sebastián");
console.log({ edad, estado, nombre });

/* La desustructuración permite desmenuzar las propiedades de un objeto */
const personaje = ({ nombre, alias, vivo, edad }) => {
  console.log({ nombre });
  console.log({ alias });
  console.log({ vivo });
  console.log({ edad });
};

let spiderMan = {
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

personaje(spiderMan);
