function media(arr){
    let media = 0

    for(let cont in arr){
        media += arr[cont]
    }

    media /= (arr.length)

    return media
}

let numeros = [3, 7, 1, 9, 4, 6]
console.log('Sua media dos numeros é: ' + media(numeros))