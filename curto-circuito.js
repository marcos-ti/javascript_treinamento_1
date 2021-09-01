// Curto Circuito
//let n = 0;
let n = 1;

n = n || 10;
// console.log(n); // Mostra o 10, pois n é false
console.log(n); // Mostra o 1, pois é verdadeiro

let isValid = true;

// isValid && console.log("É válido");
isValid || console.log("É válido");// Para na premissa isValid