var array = "Ned Jon Robb Bran Rickon".split(' ');

console.log(array.toString());
//junta os elementos com | no meio
console.log(array.join(' | '));

//coloca  no final
array.push("Sansa");
//coloca no começo
array.unshift("Sansa");

console.log(array);

//tira do final
var elemento = array.pop();
//tira do começo
elemento = array.shift();

console.log(elemento);
console.log(array);

array[1] = "Jon Snow";

console.log(array);

//aqui ele corta a partir do elemento 3 do array
var slice = array.slice(3);
console.log(slice);
//aqui corta do 3 ao 5(o primeiro começa do zero e o segundo depois da virgula começa do 1)
var slice = array.slice(3,5);
console.log(slice);

//aqui ele substitui os valores pela posição escolhida, no caso tira Jon Snow e poe Arya e Sansa
//[ 'Ned', 'Jon Snow', 'Robb', 'Bran', 'Rickon' ]
//[ 'Ned', 'Arya', 'Sansa', 'Robb', 'Bran', 'Rickon' ]
var splice = array.splice(1,1,"Arya", "Sansa");
console.log(splice);
console.log(array);
//remove o elemento da posição escolhida, no caso posição 3, 1 elemento
array.splice(3,1);

console.log(array);

//para concatenar arrays
array = array.concat(splice, slice);
console.log(array);