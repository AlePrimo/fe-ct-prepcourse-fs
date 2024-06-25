function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x >= y) {
    return x;
  }else {
    return y;
  }
}
var res = obtenerMayor(4, 2);
console.log(res);
module.exports = obtenerMayor;
