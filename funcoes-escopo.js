// escopo global
let n = "global"

function mostrarN(){
    let n = "local"
    console.log("O valor de n é: " + n);
}

mostrarN();
console.log("O valor de n é: " + n);

function funcExt(){
    let n = "valor funcExt"

        function funcInt(){
            let n = "valor funcInt"
            console.log(n)
        }
        funcInt()
        console.log(n)
}
funcExt()