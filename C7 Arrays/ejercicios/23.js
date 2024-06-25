function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
var newArray = [];
var suma = num;
  for(var i = 0; i < 10; i++){
    if (suma === i){
     
      return "Se interrumpió la ejecución";
    }else {
      suma = suma + 2;
      newArray.push(suma);
    }
   
  }
  return newArray;
}


var res = breakStatement(50);
console.log(res);


module.exports = breakStatement;
