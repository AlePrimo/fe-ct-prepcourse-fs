function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var cantidad = 0;
  array.forEach(element => {if(element > 10){cantidad++;}});
  return cantidad;
}

var array = [1, 22, 12, 5, 16];
var res = contarElementosMayoresA10(array);
console.log(res);

module.exports = contarElementosMayoresA10;
