function alteraArray(a){
    a.push("adicionado")
}

let arr = ["a"]
console.log(arr)
alteraArray(arr)
console.log(arr)

function alteraPrimitivo(p){
    p += " adicionado"
    console.log("Dentro da funcao: ", p)
}
let msg = "mensagem"
console.log(msg)
alteraPrimitivo(msg)
console.log(msg)
