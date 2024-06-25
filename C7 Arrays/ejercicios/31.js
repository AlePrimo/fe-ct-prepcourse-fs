function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var invertido;
   invertido = texto.split('').reverse().join('').toString();
  return invertido;

}




module.exports = invertirTexto;
