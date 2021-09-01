

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
 let idade = 18;
 let paisPresentes = false;
 let comprouBilhete =  false;
 const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
 console.log(`Pode viajar: ${podeViajar}`);
//comprouBilhete === true
if(comprouBilhete){
    console.log(`não comprou o bilhete!`);
    } else {
        if(idade>=18){
            console.log(`É maior de idade, pode viajar`);
        } else {
            console.log(`Não é maior de idade, não pode viajar`);
        }
    };



let n1 = 0;
let n2 = 9.5;
let media = (n1 + n2)/2;
//console.log(`media: ${media}`);

if(n1===0 && n2===0){
    console.log(`Aluno reprovado`);
    } else if ((n1+n2)/2<=4.75){
            console.log(`Aluno em recuperação`);
            } else {
                console.log(`Aluno Aprovado`);
            };
    
