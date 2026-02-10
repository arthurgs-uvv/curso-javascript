function desconstruir(arr){
    let arr2 = [arr[0]]
    let control = 0

    for(let t of arr){
        for(let t2 of arr2){
            if(t2 === t){
                control = 1
            }
        }
        if(control === 0){
            arr2.push(t)
        }
        control = 0
    }

    return arr2
}

let ar = [3, 5, 3, 7, 5, 9, 5, 6, 7, 8, 9, 10, 10, 11, 22]
console.log(desconstruir(ar))