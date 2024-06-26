function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
 
    const strings = [str1, str2, str3].filter(str => str !== '');
    
    if (strings.length === 0) {
        return ''; 
    }

    let resultado = '';
    let maxLength = Math.max(...strings.map(str => str.length));

    
    for (let i = 0; i < maxLength; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (i < strings[j].length) {
                resultado += strings[j][i];
            }
        }
    }

    return resultado;




}

module.exports = combine;