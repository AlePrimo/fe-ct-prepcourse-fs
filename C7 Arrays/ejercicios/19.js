function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
 
  if (arguments.length === 0){
    return 0;
  
  }
   
  
  var multi = 1;
    for (var i = 0; i < arguments.length ; i++){
      multi *= arguments[i];
      
    }
    return multi;
}
  
  



var res = multiplicarArgumentos(10, 2);
console.log(res);

module.exports = multiplicarArgumentos;
