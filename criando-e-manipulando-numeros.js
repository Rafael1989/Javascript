var x = 4.56e7; // 45600000  --> 456 x 10^7
var y = 123e-6; // 0.000123  --> 123 x 10^-6

//O MÁXIMO DE DÍGITOS SÃO 15, DEPOIS DISSO ESTORA E ELE COLOCA 10000000000000000
var z = 999999999999999999;
console.log(z);

//NÚMEROS DECIMAIS ACEITA ATÉ 16 DÍGITOS, DEPOIS ELE COLOCA 1
var z = 0.99999999999999999999
console.log(z);

// 0xFFF é hexadecimal onde fff é o 4095 e o prefixo sempre é 0x
var a = 0xFFF; // 4095 em decimal

//4095 em octal sendo 7777 e o 0 prefixo
var b = 07777;

//hexadecimal 16
console.log(b.toString(16));
//octal 8
console.log(b.toString(8));
//binário
console.log(b.toString(2));
//decimal
console.log(b.toString());

console.log(x.toExponential()); //4.56e+7 mais otimizado com 1 número antes da vírgula
//número de casas no decimal, no caso 1
console.log(x.toExponential(1));//4.6e+7 mais otimizado com 1 número antes da vírgula
//número de casas no decimal, no caso 0, aí arredonda pra 5
console.log(x.toExponential(0));//5e+7 mais otimizado com 1 número antes da vírgula
//Arredonda para apenas 2 casas decimais
console.log((3.357).toFixed(2)); //3.36
//número de dígitos
console.log((3.357).toPrecision(2));//3.4