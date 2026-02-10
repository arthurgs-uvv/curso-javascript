function ordem(arr){
    let control = arr[0] - 1
    let boleam = false

    for(let t of arr){
        if(t === (control + 1)){
            control++
        } else {
            return false
        }
    }
    return true
}

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 10]
console.log(ordem(ar))