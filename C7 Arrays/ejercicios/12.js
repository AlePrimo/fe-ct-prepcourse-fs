function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(str => str.toUpperCase());
}

var minu = ["meme","mimo"];
var mayu = convertirStringAMayusculas(minu);
console.log(mayu);

module.exports = convertirStringAMayusculas;
