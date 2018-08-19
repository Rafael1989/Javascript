//NÃO USAR VARIÁVEL GLOBAL
//SEMPRE DEIXAR DECLARAÇÃO DE VARIÁVEL NO TOPO
//SEMPRE USAR ASPAS DUPLAS
//SEPARAR DECLARAÇÃO DE VARIÁVEIS COM VÍRGULA
//PULAR LINHA ENTRE AS PROPRIEDADES DO OBJETO
//PULAR LINHA ENTRE ASSUNTOS DIFERENTES
(function(){
  var escopoLocal,
      esopoGlobal,
      foo,
      obj,
      array;

  escopoLocal = "foo";
  escopoLocal.split("");
  console.log(escopoLocal);

  obj = {
    foo: "bar",
    bar: "foo",
    foobar: "oi"
  };

  array = [
    1, 
    2, 
    3
  ];

})();