/* Los primitivos se pasan por valor mientras los objetos se pasan por referencia, es decir */

let a = 10;
let b = a;

a = 30;
console.log({ a }); // a=30
console.log({ b }); // b=10

/* El valor de 'a' cambia en momentos diferentes, mientras que el de 'b' se mantiene igual */

let juan = { nombre: "Juan" };
let ana = juan;

ana.nombre = "Ana";
console.log({ juan }); // nombre=Ana
console.log({ ana }); // nombre=Ana

/* Al pasarse por referencia, cuando mutan un valor mutan todas las referencias del objeto */

let sebastian = { nombre: "Sebastián" };
let omar = { ...sebastian };

omar.nombre = "Omar";

console.log({ sebastian });
console.log({ omar });

/* Para romper la referencia se utiliza el operador spred{...} */

let frutas = ["Mazana", "Pera"];
let frutas2 = [...frutas];

frutas.push("Mora");
frutas2.push("Mango");

console.table({ frutas, frutas2 });

/* Lo mismo ocurre con los arreglos [...] */
