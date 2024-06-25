function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var newArray = [];

  for (var i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      newArray.push(array[i]);
    }
  }
  if(newArray.length !== 3){
    return "No se encontraron los meses pedidos"
  }else {
    return newArray;
  }

}

var meses = ["Junio", "Enero", "Noviembre"];
var res = mesesDelAño(meses);
console.log(res); 

module.exports = mesesDelAño;
