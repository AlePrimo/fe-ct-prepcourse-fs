function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:
  if(x === y){
    console.log("true");
    return true;
  }else {
    console.log("false");
    return false;
  }
}

sonIguales(6, 4);

module.exports = sonIguales;