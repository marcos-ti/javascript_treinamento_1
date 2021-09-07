const pessoas = [{
    nome: "Marcos",
    idade: 43
},{
    nome: "Maria",
    idade: 28
},{
    nome: "Helena",
    idade: 34
},{
    nome: "João",
    idade: 23
}]

for(let i=0;i<pessoas.length;i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos de idade`)
}