const readline = require("readline")


const entrada = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

entrada.question("Digite o seu peso: ", function(peso){
    entrada.question("Digite a sua altura: ", function(altura){
        pesoConvertido = parseInt(peso)
        alturaConvertida = parseFloat(altura)
        imc = pesoConvertido / (alturaConvertida*alturaConvertida)
        if(imc < 18.5){
            console.log("")
        }
    })
    entrada.close()
})
