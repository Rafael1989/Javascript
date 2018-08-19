function Stark(nome, idade, corDoCabelo){
	this.nome = nome;
	this.idade = idade;
	this.corDoCabelo = corDoCabelo;
	this.sobrenome = "Stark";
	this.apresentar = function(){
		console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
	}
}

var ned = new Stark("Ned", 40, "Preto");
ned.darBomDia = function(){
	console.log("Bom dia");
}
//ADICIONA UMA FUNÇÃO A CLASSE STARK
Stark.prototype.darTchau = function(){console.log("Tchau");};
ned.apresentar();
ned.darBomDia();

var sansa = new Stark("Sansa", 13, "Cobre");
sansa.darTchau();
sansa.apresentar();
//NÃO IRÁ FUNCIONAR POIS SÓ ADICIONOU AO NED A FUNÇÃO DARBOMDIA, NÃO AO PROTOTYPE
sansa.darBomDia();
//PARA ADICIONAR UMA FUNÇÃO A STRING
String.prototype.apagar = function() {
  return "";
}

console.log("oi".apagar());