## Desestruturação

- Serve para criar váriaveis com o mesmo nome de onde vieram

```js
Objeto
let objeto = {
    num: 0
    caixa: {
        caixa1: valor1,
        caixa2: valor2
    }
}
let {num} = objeto //num = 0
let {num: numero} = objeto //numero = 0 (caso queira renomear)
let {num: {caixa1, caixa2}} = objeto //desestrutura objeto de objeto

Array
let array = [valor1, valor2]
let [fistValue] = array //fistValue = valor1

# Tipos de Dados

## Strings

- "Array" de caracteres
- .length //contagem de caracteres
- .toUpperCase() //tudo para maiúsculo
- .toLowerCase() //tudo para minúsculo
- .includes("") //saber se algo está incluso (true e false)
- .startsWith("") //saber se começa com
- .endsWith("") //saber se finaliza com
- .slice(n1, n2) //mostra de uma posição a outra
- .replace("", "") //troca um valor da string por outro
- .repeat(n) //repetir a string uma quant de vezes
- .split("") //separa a string em um array
- .join("") //junta os arrays em uma string

## Booleanos

- Boolean(variável) = ver o valor booleano

- Truthy (verdadeiro, true)
- Falsy (falso, false)

- Truthy:
- Números, strings não vazias, true, objetos, funções
  
- Falsy:
- False, 0, -0, NaN, strings vazias, null, undefined

# Documentos

## Módulos

- Caso queira utilizar itens de arquivos diferentes podemos utilizar o commomjs e es modules.  
  
CommomJs
No .json "type": "commomjs"

```js
module.exports = {item1, item2}

const math = require("./caminho")
const {sum} = require("./caminho")
```
  
ES Modules
No .json "type": "module"

```js
export etc
export default //Não pode desestruturar

import { } from "./caminho"
```

## Bibliotecas

- No terminal do package.json utilize: npm install (biblioteca)

- Clack/prompt é interessante

```js
import (itens) from "biblioteca";


## Scripts

No package.json  
  
- Para executar os arquivos no terminal, utilize nmp run (scripts) (exemplo)

- No package.json, quando for criar um arquivo .js (sempre colocar em uma pasta src), alterar o "main": para "src/index.js"  
  
- Em "Scripts":

- "start": "node --env-file .env src/index.js" (a parte do env serve para poder acessar esses dados)

- .env : não é enviado para github, pode conter informações sensíveis.

- "watch": "node --watch --env-file .env src/index.js" (serve para manter o arquivo sendo executado)

## Caminhos

```js
./ Mesma pasta
../ Voltar uma pasta
../../ Voltar duas pastas
./folder/ Entra em uma pasta
../out/ Volta uma pasta e entra em outra
./file.js Acessa um arquivo

# Array/Vetor (Variável composta)

- Variáveis simples só conseguem armazenar um valor por vez.  

- Variáveis compostas devem ser capazes de armazenas vários valores em uma mesma estrutura.

```js
let num = [valor 1, valor 2, valor 3]

num [3] = 6

num.push()     //acrecenta um valor por último
num.pop()       //remove e retorna o último valor
num.shift()     //remove e retorna o primeiro item do array
num.unshift()   //acrescenta um valor no primeiro item no array

num.length      //diz o tamanho do array

num.sort()      //coloca em ordem crescente os valores de string
num.sort(function(a, b){return a-b})    //para números

for(let pos in num){ //for reduzido - in torna pos a posição do array
    console.log(num[pos])
}

for(let pos of num){ //for reduzido - of torna pos o valor do array
    console.log(pos)
}

num.indexOf(7)  //procura no vetor o valor 7 e retorna a posição, se não encontrar retorna -1
```

# Objeto

```js
let objeto = {
    chave: valor,
    chave2: valor2,
    function(){}
}
```

Quando uma função está dentro de um objeto, chamamos de método.  

## Acessar dados

```js
objeto.chave
objeto["chave"]
Remover dados: delete objeto.chave
```

## Propriedades

```js
let obj1 = obj2 //Apontam para o mesmo obj na memória

this.chave  //Referênciar dentro do próprio objeto

for(let chave in objeto){
    console.log(chave, objeto[chave])
}
```

## Desestruturação

- Serve para criar váriaveis com o mesmo nome de onde vieram

```js
Objeto
let objeto = {
    num: 0
    caixa: {
        caixa1: valor1,
        caixa2: valor2
    }
}
let {num} = objeto //num = 0
let {num: numero} = objeto //numero = 0 (caso queira renomear)
let {num: {caixa1, caixa2}} = objeto //desestrutura objeto de objeto

Array
let array = [valor1, valor2]
let [fistValue] = array //fistValue = valor1

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
function fatorial(n){
    if (n==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
```

# Complementares

## Escopos

- Bloco, função, léxico

- Variaveis
-- var = declarado de forma global
-- const = declarado apenas no escopo
-- let = declarado apenas no escopo

- Função
-- Qualquer variável declarada dentro de uma função tem um escopo (até var)

- Léxico
-- Caso uma função não encontre uma variável em seu escopo, ela procurará em um escopo acima
