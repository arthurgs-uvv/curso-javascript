/*
7) Recursividade + array (Sólido) 

Crie uma função recursiva que: 
Receba um array

Retorne a soma de todos os elementos 

Não pode usar for 
Não pode usar .reduce()
*/

function somar(arr){
    let soma = 0
    let tempo = 0

    if(tempo == (arr.length - 1)){
        return arr[length - 1]
    } else{
        tempo++
        return soma + somar(arr)
    }
}

let arr = [1, 2, 3]
console.log(somar(arr))