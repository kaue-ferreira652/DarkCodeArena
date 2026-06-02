const readline = require("readline-sync")

let numeros = [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]

numeros.sort((a, b) => a - b)
console.log(numeros)

