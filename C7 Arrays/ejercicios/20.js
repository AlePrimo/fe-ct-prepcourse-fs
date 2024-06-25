function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
    var elemento = array[0];
  
  for (var i = 0; i < array.length; i++){
    
    if(array[i] !== elemento){return false;}
       
  }

  return true;
  
}

var el = [10, 10, 10, 1 ];
var res = todosIguales(el);
console.log(res);

module.exports = todosIguales;
