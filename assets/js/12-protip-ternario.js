/* Una función de flecha que utiliza ternarios para comparar el número más alto */
const elMayor = (a, b) => (a > b ? a : b);

console.log(elMayor(20, 15));

/* Se puede crear condiciones incluso en arreglos u objetos */
const amigo = false;
const amigoArr = ["Omar", "Sebastián", "Stalin", amigo ? "Alan" : "Anthony"];

console.log({ amigoArr });
