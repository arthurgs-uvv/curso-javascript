let pessoa = {
    Nome: "Arthur", 
    Idade: "21",
    Peso: "75.5",
    engordar(comida){
        console.log("Você engordou")
        this.Peso += comida
        console.log(`Seu peso agora é: ${this.Peso}`)
    },
    emagrecer(malhar){
        console.log("Você malhou")
        this.Peso -= malhar
        console.log(`Seu peso agora é: ${this.Peso}`)
    }
}

console.log(pessoa)
console.log(pessoa.emagrecer(10))
console.log(pessoa.engordar(20))
console.log(pessoa.emagrecer(10))