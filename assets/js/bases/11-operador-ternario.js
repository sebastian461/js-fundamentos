/* Entre semana el sitio funciona a las 11,
fines de semana a las 9 */

const dia = 6; //0: domingo, 1: lunes....
const horaActual = 10;

let horaApertura;
let mensaje;

/* Forma tradicional If-else */
if (dia === 0 || dia === 6) {
  console.log("Fin de semana");
  horaApertura = 9;
} else {
  console.log("Entre semana");
  horaApertura = 11;
}

if (horaActual >= horaApertura && horaActual < 17) {
  mensaje = "Sitio abierto";
} else if (horaActual < horaApertura) {
  mensaje = `Abrimo a las ${horaApertura}`; //para anexar valores en strings, es mejor usar backticks (``)
} else {
  mensaje = "Sitio cerrado";
}

console.log({ horaApertura, mensaje });

/* Forma simplificada con ternarios
'?' indica sí la condición se cumplio
':' indica el caso contrario
*/
//el método 'includes' retorna un booleano evaluando dentro del arreglo, el valor que se le pasa
//se puede usar dentro de un if-else
horaApertura = [0, 6].includes(dia) ? 9 : 11;

mensaje =
  horaActual >= horaApertura && horaActual < 17
    ? "Sitio abierto"
    : horaActual < horaApertura
    ? `Abrimos a las ${horaApertura}`
    : "Sitio cerrado";
console.log({ horaApertura, mensaje });
