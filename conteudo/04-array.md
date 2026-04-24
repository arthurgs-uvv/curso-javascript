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

num.slice(inicio, fim) //é um método de arrays que serve para copiar uma parte do array sem modificar o array original.

Array.isArray(minhaVariavel) //true se for array, false se não for
```
