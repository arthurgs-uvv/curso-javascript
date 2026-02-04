function percarray(arr){
    let soma = 0
    
    for(const t = 0; t <= (arr.lenght -1); t++){
        console.log(arr[t])
        soma += arr[t]
    }
    return console.log(soma + '\n')
}

let numeros = [3, 7, 1, 9, 4]

console.log(percarray(numeros))