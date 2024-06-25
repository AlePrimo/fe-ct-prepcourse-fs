function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map(num => num * array.indexOf(num));
}



var numeros = [2, 4, 6];
var multi = multiplicarElementosPorIndice(numeros);
console.log(multi);

module.exports = multiplicarElementosPorIndice;
