# Funções

- São ações executadas assim que são chamadas ou em decorrência de um evento.  
- Uma função pode receber parâmetros e retornar um resultado.

```js
function nome(parâmetro){ //Quando declarada assim, é universal
    return [variável]
}
nome()                  //Chamar a função

let v = function(x){    //Só pode ser chamada após ser declarada
    return x
}

let nome = (parametros) => (return) //arrow function
Ex: let sum = (a,b) => a + b;

((name) = {             //IIFE (Expressão de função invocada imediatamente)
    console.log(name)   //Só é possível executar uma única vez
})("Arthur")

function pow(n1, n2=2){} //Caso não receba nenhum valor n2=2

...args - pode ser usado como parâmetro de função e ser chamado, ele é um array de possíveis valores que podem ser passados na função
```

## Recursividade

```js
//FÓRMULA UNIVERSAL:
function algo(entrada) {
    if (casoBase) {
        return valorFinal
    }

    return resolverParte + algo(entradaMenor)
}

//EXEMPLO:
function fatorial(n){
    if (n==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
```
