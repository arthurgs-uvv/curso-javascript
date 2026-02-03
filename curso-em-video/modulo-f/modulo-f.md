# Avançando

## Variáveis Compostas (array ou vetor)

- Variáveis simples só conseguem armazenar um valor por vez.  

- Variáveis compostas devem ser capazes de armazenas vários valores em uma mesma estrutura.

```
let num = [valor 1, valor 2, valor 3]

num [3] = 6

num.push(7)     //acrecenta um valor (7)

num.length      //diz o tamanho do array

num.sort()      //coloca em ordem crescente os valores de string
num.sort(function(a, b){return a-b})    //para números

for(let pos in num){ //for reduzido
    console.log(num[pos])
}

num.indexOf(7)  //procura no vetor o valor 7 e retorna a posição, se não encontrar retorna -1
```

## Funções

- São ações executadas assim que são chamadas ou em decorrência de um evento.  

- Uma função pode receber parâmetros e retornar um resultado.

```
function nome(parâmetro){

    return [variável]
}

let v = function(x){
    return x
}
console.log(v(5))
``` 
### Recursividade
```
function fatorial(n){
    if (n==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
```