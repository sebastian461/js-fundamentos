class Rectangulo {
  /* Agregar '#' a una propiedad de la clase lo convierte en una propiedad privada
    y solo puede ser accedida en la clase
  */
  #area = 0;
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }

  /* Tambien aplica a métodos */
  #duplicarArea() {
    console.log(this.#area * 2);
  }

  duplicarArea() {
    this.#duplicarArea();
  }
}

const rectangulo = new Rectangulo(10, 15);
console.log(rectangulo);
rectangulo.duplicarArea();
