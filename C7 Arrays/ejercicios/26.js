function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
 var multiplo;
  for (var i = 0; i < secuencia.length; i++){
    if (secuencia[i] % n === 0){
      multiplo = secuencia[i];
      break;
      
       
    }
  }
  return multiplo;
}

var sec = [2, 4, 6, 4, 60];
var res =encontrarPrimerMultiploDeN(5, sec);
console.log(res);

module.exports = encontrarPrimerMultiploDeN;