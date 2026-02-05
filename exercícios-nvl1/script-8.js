function inverterArray(arr1){
    let arr2 = []

    for(let t = (arr1.length - 1); t >= 0; t--){
        arr2.push(arr1[t])
    }

    return arr2
}

function percoArray(arr){
    for(let t = 0; t <= (Number(arr.length) - 1); t++){
        console.log(arr[t])
    }
}

let numeros = [3, 7, 1, 9, 4, 10, 20, 54, 2, 3, 45, 5, 1]
console.log('Seu array é: ')
console.log(percoArray(inverterArray(numeros)))
