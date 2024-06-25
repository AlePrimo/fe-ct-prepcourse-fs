function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

   //return array.find((string) => string.length > 5);

   for(var i = 0; i < array.length ; i++){
    if (array[i].length >= 5) {
      return array[i];

    }
  } 
 

  return undefined;
  
 
}

var array = ["pep", "piru","totoroloo", "caconia"];

var res = obtenerPrimerStringLargo(array);
console.log(res);


module.exports = obtenerPrimerStringLargo;
