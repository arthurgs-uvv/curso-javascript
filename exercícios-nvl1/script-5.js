function maiorValor(arr){
    arr.sort(function(a, b){return a-b})

    return arr[(arr.length - 1)]
}

let numeros = [3, 7, 1, 9, 4, 10, 50, 51, 3, -20, 5]

console.log('O maior Valor do Array é ' + maiorValor(numeros))