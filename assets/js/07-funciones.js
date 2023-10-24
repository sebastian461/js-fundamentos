/* La manera estandar de definir una función */
function saludar(nombre) {
  console.log("Hola " + nombre);
}

/* Se puede asignar una función o método a una variable (función ánonima) */
const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

/* Esta es la manera de definir una función de flecha (mayor mente utilizadas)*/
const saludarFlecha = () => {
  console.log("Hola desde flecha");
};

const aleatorio = () => Math.random(); //esta es la manera de definir una función que solo retorna algo

saludar("Sebastián");
saludar2("Sebastián");
saludarFlecha();
console.log(aleatorio());
