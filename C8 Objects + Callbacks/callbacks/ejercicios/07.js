function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var letra = [];
   letra = arrayOfStrings.filter(str => str.startsWith('a' || "A") );
         return letra;
}

module.exports = filter;
