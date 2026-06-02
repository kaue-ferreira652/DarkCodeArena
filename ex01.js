const readline = require('readline-sync')

let Número = readline.questionInt('Informe o número: ')

if(Número > 0){
    console.log('Positivo')
}else if(Número == 0 || Número < 0){
    console.log('Zero') 
    console.log('Negativo')
}

