function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var indice = 0;
  var mayor = array[0];
  for (var i = 0; i < array.length ; i++){
    if (array[i] > mayor) {
      mayor = array[i];
      indice = i;
    }
  }
  return indice;
}

var array1 = [44,3,128];
var res = encontrarIndiceMayor(array1);
console.log(res);


module.exports = encontrarIndiceMayor;
