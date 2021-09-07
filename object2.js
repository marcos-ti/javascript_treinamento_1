const valor = {
    nome: "Maria",
    idade: 38,
    email: "maria@server.com"
}

//console.log(valor)

for(chave in valor){
    console.log(chave)
    console.log(valor[chave])
}