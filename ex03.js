const readline = require('readline-sync')

let valorOriginal =  readline.questionFloat('Informe o valor da compra: ')
let valorfinal = 500
let percentual = (valorfinal / valorOriginal) * 20

if(valorOriginal >= valorfinal){
    console.log(`Você tem um desconto de 20%`)
}else if(percentual <= valorfinal * 10){
    console.log('Você tem um desconto de 10%')
    console.log('Você não tem desconto!')
}

