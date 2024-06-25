function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var string = palabras.join(" ");
  return string;

}

var palabras = ["Hola", "que", "tal!"]

var res = dePalabrasAFrase(palabras);
console.log(res);

module.exports = dePalabrasAFrase;
