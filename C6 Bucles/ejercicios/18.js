function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a <= 0 || b <= 0){
    return 0;
  } else if (a > b) {
    [a, b] = [b, a];
  }else if (a === b) {
    return a;
  }
  var producto = 1;
  for (var i = a; i <= b ; i++){
   
    producto = producto * i;
   
    
  }

    return producto;

  }

  var res = productoEntreNúmeros(2, 4);
  console.log(res);
    exports = productoEntreNúmeros;