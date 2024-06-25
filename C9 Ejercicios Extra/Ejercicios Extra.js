/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
   return Object.entries(objeto);
  
      

   }



function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

      var objeto = {};


      for(var i = 0; i < string.length; i++){

        var letra = string[i];

        if (letra in objeto) {
          objeto[letra]++;
        }else {
          objeto[letra] = 1;
        }

      }
    
      var objetoOrdenado = Object.keys(objeto).sort();

      var objetoFinal = {};

      for (var i = 0; i < objetoOrdenado.length; i++){
          var letra = objetoOrdenado[i];
          objetoFinal[letra] = objeto[letra];
      }

  
      return objetoFinal;


}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  
    var letras = string.split('');
  
   
    var mayusculas = letras.filter(char => char === char.toUpperCase());
    var minusculas = letras.filter(char => char === char.toLowerCase());
  
    
    var resultado = mayusculas.join('') + minusculas.join('');
  
    return resultado;
  };
  
 

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var palabrasSeparadas = frase.split(' ');
  
  var palabrasInvertidas = palabrasSeparadas.map(palabra => palabra.split('').reverse().join(''));

 var mirror = palabrasInvertidas.join(' ');
return mirror;



}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  if (numero.toString() !== numero.toString().split('').reverse().join('')){
    return "No es capicua";
  }   else {
    return "Es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  var letras = string.split('');
  var menosLetras = letras.filter(letra => letra !== 'a' && letra !==  'b'  && letra !== 'c');

  var nuevoString = menosLetras.join('');

  return nuevoString;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  var ordenado = arrayOfStrings.sort((palabra1, palabra2 )=> palabra1.length - palabra2.length );
  

  return ordenado;


}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var union = array1.filter(element => array2.includes(element));
  
  return union;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
