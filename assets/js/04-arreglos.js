/* Es una manera no muy común de definir arreglos (dimensión 10) */
const arr = new Array(10);
console.log(arr);

/* Esta es la manera más común de crear un arreglo (vació) */
const _arr = [];

let videoJuegos = ["Dota", "LoL", "WoW"];
console.log({ videoJuegos });
console.log(videoJuegos[0]);

/* Los arreglos pueden almacenar cúalquier tipo de valor */
let arregloDeCosas = [
  true,
  123,
  "Sebastián",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["Lina", "Mirana", "Luna"],
];

console.log({ arregloDeCosas });
console.log(arregloDeCosas[7][2]);
