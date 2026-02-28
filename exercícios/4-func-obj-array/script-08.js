/*
8) Função que cria função + contador interno (Sólido) 

Crie: multiplicador(fator) 
Ela deve retornar uma função que: 
Multiplica qualquer número pelo fator 
Guarda internamente quantas vezes foi usada 
Tenha um método para ver quantas vezes foi chamada 

Exemplo: 
let dobro = multiplicador(2) 
dobro(10) // 20 
dobro(5) // 10 

console.log(dobro.contador()) // 2
*/

function multiplicador(fator){
    let quant = 0

    function resul(num){
        quant ++
        return num * fator
    }

    resul.contador = () => quant

    return resul
}

let dobro = multiplicador(2)
let x10 = multiplicador(10)

console.log(dobro(10))
console.log(x10(10))
console.log(x10(50))
console.log(dobro.contador())
console.log(x10.contador())