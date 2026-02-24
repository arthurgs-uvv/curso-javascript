function contadorPerso(passo){
    let num = 0

    return function(){
        num += passo
        return num
    }
}

let contador5 = contadorPerso(5)
let contador2 = contadorPerso(2)
let contador23 = contadorPerso(23)
let contador1000 = contadorPerso(1000)

console.log(contador1000())
console.log(contador23())
console.log(contador1000())
console.log(contador5())
console.log(contador2())
console.log(contador2())
console.log(contador2())
console.log(contador23())
console.log(contador5())
console.log(contador1000())
