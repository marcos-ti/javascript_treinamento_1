let n1 = 10;
// let n2 = "2.456";
let n2 = "14"
// n2 = parseInt(n2)// Conversão Explícita
// n2 = parseFloat(n2)// Conversão Explícita
n2 = Number(n2)// Conversão Explícita
/*
console.log(n1 * n2, typeof n1, typeof n2)// Conversão Implícita
console.log(n1 / n2, typeof n1, typeof n2)// Conversão Implícita
console.log(n1 + n2, typeof n1, typeof n2)// Concatena
console.log(n1 - n2, typeof n1, typeof n2)// Conversão Implícita
*/
// parseInt, parseFloat, Number()

console.log(n1 + n2, typeof n1, typeof n2, n2);

// Convertendo para String
n1 = 11;
console.log(typeof n1, n1);
n1 = n1.toString();
console.log(typeof n1, n1);

// Hexadecimal e Binario

// Hexadecimal
n1 = 15;
console.log(typeof n1, n1);
n1 = n1.toString(16);//Hexadecimal
console.log(typeof n1, n1);

// Binário
n1 = 15;
console.log(typeof n1, n1);
n1 = n1.toString(2);// Binário
console.log(typeof n1, n1);