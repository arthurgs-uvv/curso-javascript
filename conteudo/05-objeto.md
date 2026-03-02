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
