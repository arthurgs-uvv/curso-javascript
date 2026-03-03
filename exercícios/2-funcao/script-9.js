/*
🔄 Inverter String Recursivamente

Crie:
inverterString(str)

Ela deve:
Receber uma string
Retornar ela invertida
Não pode usar .reverse()
Não pode usar loop

Exemplo:
inverterString("abc") // "cba"

Aqui começa a testar:
Substring
Redução de problema
Ordem de execução da pilha
*/

function inverterString(str){
    if(str.length === 0){
        return ""
    }

    return str[str.length - 1] + inverterString(str.slice(0, str.length - 1))
}

arr = "casa"
arr2 = "subinoonibus"
arr3 = "abacaxi"

console.log(inverterString(arr))
console.log(inverterString(arr2))
console.log(inverterString(arr3))