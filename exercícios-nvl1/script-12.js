function segundo(arr){
    let maior = arr[0]
    let seg = arr[0]
    
    
    for (let t of arr){
        if(t >= maior){
            maior = t
        } else if (t >= seg){
            seg = t
        }
    }

    return seg
}

let array = [5, 10, 3, 8, 9, 22, 3, 5, 21]
console.log(segundo(array))