var obj = { 
  nome: "Jon", 
  sobrenome: "Snow", 
  idade: 16,
  apresentar: apresentacao,
  mostrar: function(){
  	console.log("Mostrar");
  }
};

//EM UM OBJETO PODEMOS TER MÉTODOS
function apresentacao() {
  console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
}

console.log(obj.sobrenome);

obj.apresentar();

obj.mostrar();