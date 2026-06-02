const readline = require("readline-sync")

let numero = readline.questionInt("Informe um número: ")

for(let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`)
}

