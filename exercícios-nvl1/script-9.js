function buscarValor(arr, v1){
    let boole = false

    for(let t in arr){
        if(v1 == arr[t])
            return boole = true
    }

    return boole
}

let numeros = [3, 7, 1, 9, 4]
let num = 3
console.log('O valor existe no array?! ' + buscarValor(numeros, num))

