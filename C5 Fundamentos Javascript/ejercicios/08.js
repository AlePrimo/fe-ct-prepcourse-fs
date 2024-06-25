function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:

  if (typeof(numero) != "number"){
      console.log("El dato no es un numero")
      return false;
  } else if (numero % 1 == 0) {
    console.log("El numero es decimal ? " + true);
      return true;

  }else {

    console.log("El numero es decimal ? " + false);
    return false;
    
  }
}

esNumeroEntero(45.2);

module.exports = esNumeroEntero;