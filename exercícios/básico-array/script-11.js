function parImp(arr){
    let obj = {
        pares: [],
        impares: []
    }
    for(let t of arr){
        if(t%2 === 0){
            obj.pares.push(t)
        } else{
            obj.impares.push(t)
        }
    }
    
    return obj
}

let entrada = [3, 4, 7, 10, 15, 20, 0, -5, 10200203532]
console.log(parImp(entrada))