function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var seis = [];

  for(var i = 0; i <=10; i++){
    seis.push(6 * i);
  }
 return seis;
 
}
var res = tablaDelSeis();
console.log(res);
module.exports = tablaDelSeis;
