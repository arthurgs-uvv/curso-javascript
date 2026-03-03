/*
EXERCÍCIO 1 — Fácil
🔢 Soma de Array Recursiva

Crie uma função:
somaArray(arr)

Ela deve:
Receber um array de números
Retornar a soma total
Não pode usar loop
Não pode usar .reduce()

Exemplo:
somaArray([1,2,3,4]) // 10

Dicas mentais:
Qual é o caso base?
Como você reduz o array a cada chamada?
*/

function somaArray(arr){   
    if(arr.length === 0){
        return 0
    }

    return arr[0] + somaArray(arr.slice(1))
}

arrNum = [1, 2, 3, 4, 5]

console.log(somaArray(arrNum))