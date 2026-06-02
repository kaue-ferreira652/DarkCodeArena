const readline = require('readline-sync')

let Nota = readline.question('Informe a nota: ')

if(Nota >= 7){
    console.log('Aluno aprovado')
}else if(Nota <= 6.9 && Nota <= 5){
    console.log('Aluno em recuperação')
    console.log('Aluno reprovado')
}