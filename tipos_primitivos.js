// strings, number (int, float), boolean

let minhaVar = "minha string";
let minhaVar2 = 'minha "string" com aspas duplas';
let minhaVar3 = "minha 'string' com aspas simples";
let minhaVar4 = "minha \"string\" com aspas duplas escapadas";
let minhaVar5 = `minha template literals`;
// Concatenação
let idade = 40;
let msg = "eu possuo " + idade + " anos";
let msg2 = `eu possuo ${idade} anos`;
console.log(msg);
console.log(msg2);
console.log("Olá " + "Mundo!");
console.log(typeof minhaVar, typeof idade, typeof msg, typeof msg2, `--`, 10 )

let n1 = 10;
let n2 = 1.5;
console.log(typeof n1);
console.log(typeof n2);

const luz = true;
console.log(`Luz é ${luz}!`);
// undefined null
/*let varIndefinida;
console.log(varIndefinida);
console.log(typeof varIndefinida);
varIndefinida = 10;
console.log(typeof varIndefinida, varIndefinida);*/

let varIndefinida = null;
console.log(varIndefinida);
console.log(typeof varIndefinida);
varIndefinida = 10;
console.log(typeof varIndefinida, varIndefinida);

