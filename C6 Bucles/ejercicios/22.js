function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var i = 0;
  var num2 = num;
  do {
   
      i++;
      num2 = num2 + 5;
     
  } while (i < 8);


  return num2;
}
var res = doWhile(5);
console.log(res);
module.exports = doWhile;