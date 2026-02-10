function contarPares(arr){
    let contar = 0

    for(let pos in arr){
        if(arr[pos]%2 == 0)
            contar++
    }
    return contar
}

let numeros = [3, 7, 1, 9, 4, 0, 20, 5, 2, 40, 4, 5, 8, 9, 3]
console.log('A quantidade de números pares no array é: ' + contarPares(numeros))