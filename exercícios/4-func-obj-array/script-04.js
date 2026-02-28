/*
4) Array + filtro manual (Intermediário)

Sem usar .filter().

Crie uma função que:

Receba um array de números

Retorne um novo array apenas com números maiores que 10

Não pode modificar o array original
*/

function filtro(arr){
    let arr2 = []
    for(let v of arr){
        if(v > 10){
            arr2.push(v)
        }
    }
    return arr2
}

let arrOrig = [10, 10, 5, 9, 3, 5, 10, 0, -29, -10, -11, 3, 44, 5, 22, 33, 55, 100, 4]

console.log(`Seu array de número maiores que 10 é esse: ${filtro(arrOrig)}`)