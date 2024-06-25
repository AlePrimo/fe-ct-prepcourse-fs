function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

var pares = [];

    array.forEach(element => {if(element % 2 === 0){pares.push(element);}});

    return pares;
   
 }
  
 

var numeros = [2, 3, 5,8];
var pares = filtrarNumerosPares(numeros);
console.log(pares);


module.exports = filtrarNumerosPares;
