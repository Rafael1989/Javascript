//NÃO DÁ PARA ALTERAR A VARIÁVEL CONTADOR, É ÚTIL QUANDO QUEREMOS QUE NADA ALTERE POR FORA, MAIS SEGURO
var tick = (function(){
  var contador = 0;

  return function() { 
    contador = contador + 1; //1,2,3
    console.log(contador);
  }
})();

tick();
tick();
tick();