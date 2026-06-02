const readline = require("readline-sync")

let Alunos = readline.questionInt("Informe os alunos nessa turma: ")
let nota = [80, 43, 20, 99, 28, 63, 16, 32, 75, 50]
let media = 50

for(let i = 0; i < 10; i++){
    media = media / 10 [i]
}
console.log(nota)

if(nota > media){
    console.log("Esses alunos ficaram acima da média")
}else if(nota < media){
    console.log("Esses alunos ficaram abaixo da média")
}

