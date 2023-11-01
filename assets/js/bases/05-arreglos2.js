/* Propiedades de los arreglos */
let juegos = ["Dota", "Spider-man", "Elden ring", "Darksouls"];
console.log("Largo:", juegos.length); //dimensión-longitud

let primero = juegos[0]; //primer elemento del arreglo
let ultimo = juegos[juegos.length - 1]; //ultimo elemento del arreglo (dinamicos)
console.log({ primero, ultimo });

/* Recorrer lo elementos de un arreglo junto con una función interna 
que realiza cualquier acción que se requiera con los elementos */
juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let nuevaDimensión = juegos.push("Hitman"); //inserta un nuevo elemento al final (casí todos lo métodos devuelven algo, en este caso un número)
console.log({ nuevaDimensión, juegos });

nuevaDimensión = juegos.unshift("Blasphemous"); //inserta un nuevo elemento al final
console.log({ nuevaDimensión, juegos });

let elementoEliminado = juegos.pop(); //elimina el ultimo elemento y lo regresa
console.log({ elementoEliminado, juegos });

let elementosBorrados = juegos.splice(0, 2); //elimina una cantidad especifica de elementos en el indice que se le indica, retorna el arreglo de elementos borrados
console.log({ elementosBorrados, juegos });

let indiceDeElemento = juegos.indexOf("Darksouls"); //devuelve el indice del elemento buscado
console.log({ indiceDeElemento });
