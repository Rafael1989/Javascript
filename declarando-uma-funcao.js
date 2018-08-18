//PODEMOS DECLARAR FUNÇÕES DESTAS 3 FORMAS
console.log(dizerOla);
//ESTA SEMPRE VAI PARA O TOPO, ENTÃO PODEMOS EXECUTAR ANTES DE DECLARAR A MESMA. AS OUTRAS NÃO
function dizerOi(nome) {
  console.log("Olá " + nome);
}

var dizerOla = function (nome) {
  console.log("Olá " + nome);
};

console.log(dizerOla);

//ESTA É A MENOS SEGURA
var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");