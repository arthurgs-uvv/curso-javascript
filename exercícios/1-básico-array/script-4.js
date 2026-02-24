function percarray(arr){
    let soma = 0
    //let tamanho = Number(arr.length) - 1 (não é necessária)
    
    for(let t = 0; t <= (Number(arr.length) - 1); t++){
        console.log(arr[t])
        soma += arr[t]
    }
    return console.log('A soma é igual a ' + soma + '\n')
}

let numeros = [3, 7, 1, 9, 4, 10, 49, 3, 22, -10]

console.log(percarray(numeros))