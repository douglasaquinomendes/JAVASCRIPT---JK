const readline = require("readline")


const entrada = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})


// abaixo de 50kg -> É criança ou Muito Magro - < 50
// Acima de 51 KG e abaixo de 70 -> Está em um abaixo do peso - 
// // else if( peso > 51  && peso < 70 )
// acima de 71 e abaixo de 90 - Peso ideal
// acima de 91 - sobre peso. 
entrada.question("Digite o seu peso: ", function(peso){
    function verificaPeso(peso){
        if(peso < 50){
            console.log("Você é criança ou está muito magro")
        }else if(peso >= 51 && peso < 70){
            console.log("Está um pouco abaixo do peso")
        }else if(peso >= 71 && peso <=90){
            console.log("Você está em um peso ideal")
        }else{
            console.log("Você está em sobrepeso")
        }
    }
    verificaPeso(peso);
    entrada.close();

})
