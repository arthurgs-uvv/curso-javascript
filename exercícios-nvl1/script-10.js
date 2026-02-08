/*
{
  total: quantidade de números,
  soma: soma dos valores,
  maior: maior valor,
  menor: menor valor,
  media: média
}
*/

function total(arr){
    return arr.length
}

function soma(arr){
    let soma = 0

    for(let a in arr){
        soma += arr[a]
    }

    return soma
}

function maior(arr){
    arr.sort(function(a, b){return a-b})

    return arr[arr.length - 1]
}

function menor(arr){
    arr.sort(function(a,b){return a-b})

    return arr[0]
}

function media(arr){
    let media = 0

    for(let a in arr){
        media += arr[a]
    }
    
    return media/(Number(arr.length))
}

function montandoObjeto(arr){
    let objeto = {
        total: total(arr),
        soma: soma(arr),
        maior: maior(arr),
        menor: menor(arr),
        media: media(arr)
    }

    return objeto 
}

let numeros = [3, 7, 1, 9, 4, 6]

console.log(numeros + "\n")
console.log(montandoObjeto(numeros))