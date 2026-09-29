const readline = require("readline")


const entrada = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

entrada.question("Digite seu idade: ", function(idade){

function verificaIdade(idade){
     if(idade < 18){
        console.log("Você é menor de idade")
    }else if(idade >= 65){
        console.log("Você é idoso")
    }else{
        console.log("Você é maior de idade")
    }
}

    verificaIdade(idade)
    console.log("Olá sua idade é:, " + idade +"!");
    verificaIdade(idade)

    entrada.close();
})

