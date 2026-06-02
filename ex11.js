const readline = require("readline-sync")

let numero = readline.questionInt("Informe um número: ")

for(let i = 10; i >= 1; i--){
    console.log(`${numero} x ${i} = ${numero * i}`)
}

