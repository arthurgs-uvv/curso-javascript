function criarContador(){
    let numero = 0 

    return function(){
        numero++
        return numero
    }
}

let senha1 = criarContador()
let senha2 = criarContador()

console.log(senha1())
console.log(senha1())
console.log(senha1())
console.log(senha1())
console.log(senha2())
console.log(senha1())
console.log(senha2())
console.log(senha2())