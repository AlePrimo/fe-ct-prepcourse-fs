function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
   return  array.map(num => num * 2);
  
}

var numeros = [2, 4, 6];
var numerosDupli= duplicarElementos(numeros);
console.log(numerosDupli);

module.exports = duplicarElementos;
