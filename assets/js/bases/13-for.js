const personas = ["Omar", "Sebastián", "Stalin"];

/* For tradicional */
for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
}

/* For in */
for (let i in personas) {
  console.log(personas[i]);
}

/* For of */
for (let persona of personas) {
  console.log(persona);
}
