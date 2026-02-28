//3) Closure + limite + retorno (Intermediário)

/*
Melhore o exercício de limite.

Crie:

limiteExec(func, limite)

Agora a função deve:

Executar até o limite

Depois retornar "Limite atingido"

Deve retornar o valor da função original

Deve aceitar parâmetros normalmente

Exemplo:

let soma = (a,b) => a+b
let somaLimitada = limiteExec(soma, 2)

console.log(somaLimitada(2,3)) // 5
console.log(somaLimitada(4,5)) // 9
console.log(somaLimitada(1,1)) // "Limite atingido"
*/

function soma(a, b){
    return a+b
}

function limiteExec(func, x){
    let contagem = 0

    return function exec(a, b){
        if(contagem >= x){
            return "Limite Atingido"
        } else{
            contagem++
            return func(a, b)
        }
    }
}

let somaLimitada = limiteExec(soma, 3)

console.log(somaLimitada(4, 8))
console.log(somaLimitada(3, 8))
console.log(somaLimitada(2, 8))
console.log(somaLimitada(1, 8))
console.log(somaLimitada(0, 8))

//func deveria ter usado (...args), não conhecia