function dizerOi(nome) {
  console.log(this);
  console.log("Oi, " + nome);
}

//TEMOS AS 3 SEGUINTES FORMAS DE CHAMAR A FUNÇÃO
dizerOi("Arya");
//ASSIM USA O ESCOPO É UM OBJETO DE NODE COMO ESTAMOS EXECUTANDO NELE NO CASO
dizerOi.call(null, "Arya");

dizerOi.apply(null, ["Arya"]);
//AQUI O ESCOPO É ESTE OBJETO VAZIO
dizerOi.call({}, "Arya");

dizerOi.apply({}, ["Arya"]);