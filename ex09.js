const readline = require("readline-sync")

let numeros = [10, 32, 6]
let maiorNumero = 32

while(numeros != maiorNumero){
    console.log("O número é menor que o maior número")
    numeros = readline.questionInt("Fale outro número: ")
}
console.log("Esse é o maior número")

