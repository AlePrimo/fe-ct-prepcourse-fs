function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor) {
    return "Soy verdadero";
  }else {
    return "Soy falso";
  }
}

var res = esVerdadero(true);

console.log(res);
module.exports = esVerdadero;
