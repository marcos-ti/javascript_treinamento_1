// Sintaxe formal
const arr = new Array(true, "Marcos", 43, Array(1,4,5))
console.log(arr[3])//posicao no array
console.log(arr[3][2])//elemento interno na posicao 2
console.log(arr[3].length)//tamanho do array
console.log(arr[3][arr[3].length-1])//ultimo elemento do array interno

/** Sintaxe Literal **/
const arr2 = ["Marcos", 0, [1,2,3], true]
arr2[4] ="Novo valor"
arr2[arr2.length] ="Novo valor2"
arr2.push("adicionado com push")
arr2.push(4, 5, 6)
console.log(arr2)
console.log(arr2[2])
console.log(arr2[2][1])
let n = 2
console.log(arr2[n])
