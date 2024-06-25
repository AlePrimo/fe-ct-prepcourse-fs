  function esVocal(letra) {
    // La función recibe un argumento llamado letra el cual es un string.
    // Retorna como resultado un string que indica si el argumento letra es una vocal.
    // de lo contrario retorna el string "Dato incorrecto"
    // Por ejemplo: 
    // "a" ---> "Es vocal"
    // "u" ---> "Es vocal"
    // "n" ---> "Dato incorrecto"
    // "texto largo" ---> "Dato incorrecto"
    // Tu código:
    var letra1 = letra.toLowerCase();
  if (letra1 == "a" || letra1 == "e" || letra1 == "i" || letra1 == "o" || letra1 == "u" && letra.length == 1){
     
      return "Es vocal";
    }else {
   
      return "Dato incorrecto";
    }
  }

esVocal("I");
module.exports = esVocal;
