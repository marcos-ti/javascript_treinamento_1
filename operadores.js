// + - * / % **
//let n1 = 10
//let n2 = 5
// OPERADORES ARITMÉTICOS
// console.log(n1 + n2)
// console.log(n1 - n2)
// console.log(n1 * n2)
// console.log(n1 / n2)
// console.log(n1 % n2)
// console.log(n1 ** n2)

// OPERADORES DE ATRIBUIÇÃO
// let n3 = 20;
// n3 = n3 + 15;
// n3 += 15;
// n3 -= 15;
// n3 *= 15;
// n3 /= 15;
// n3 %= 15;
//n3 **= 15;
//console.log(n3);

// INCREMENTO E DECREMENTO
//let i = 0;
//i = i + 1;
//i += 1;
// i++;
//i--;
// ++i;
// --i;

// Primeiro atribui o valor 0 à variavel e depois soma 1
// console.log(i++);
// console.log(i);

// Primeiro soma 1 à variavel e depois mostra a soma
// console.log(++i);
// console.log(i);

// OPERADORES DE COMPARACAO
/**
 * igualdade de valor ==
 * igualdade de valor e tipo ===
 * <, >, <=, >=
 * != valores diferentes
 * !== valores e tipos diferentes
 */
// let n1 = 10;
// let n2 = 5;
// let n3 = 20;
// let n4 = '10';

// // console.log(n1 == n4);
// console.log(n1 === n4); // false
// console.log(n1 == n4); // true

let n1 = 10;
let n2 = 5;
let n3 = 20;
let n4 = '10';

// OPERADORES LOGICOS
 /**
  * AND (&&) 1 - Precedencia, porem () vai na frente em precedencia
  * OR (||)
  * NOT (!)
  * 
  * Para uma pessoa viajar para o exterior:
  * - Precisa ser maior de 18
  * OU
  * - Acompanhado(a) dos pais
  */
 let idade = 21;
 let paisPresentes = false;
 let comprouBilhete =  false;
 const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
 console.log(`Pode viajar: ${podeViajar}`);