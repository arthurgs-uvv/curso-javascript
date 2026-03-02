# CONTEÚDO SOBRE JAVA SCRIPT

## CLIENTE X SERVER

```js
Celular e computador = cliente  
Servidor = Server  
O navegador te leva a internet e com o url do site ele te envia para um servidor do url, logo após o servidor te envia uma cópia do site.  
Website:   
HTML (Interface)(Conteúdo)  
CSS (Designer)(Estilo)  
JS (Interações)  
```

## Aula 05 -- VARIÁVEIS E TIPOS PRIMITIVOS

### Comentário

```js
//  
/* */  

var a //cria uma variável a (identificador)  
```  

### Identificadores

```js
Podem começar com letra, $ ou _  
Não podem começar com números  
É possível usar letras ou números  
É possível usar acentos e símbolos  
Não podem conter espaços  
Não podem ser palavras reservadas (ex: fuction, var)  
```

### Data Types

```js
number  
  Infinity  
  NaN  
string  
boolean  
null  
undefined  
object  
  Array  
function  
```

## Aula 06 -- TRATAMENTO DE DADOS

```js
typeof(a)  //Diz qual o tipo de dado da variável "a"  
```

### Transformando tipo de dados

```js
Number.parseInt(n)  //transforma para int  
Number.parseFloat(n)  //transforma para float  
var x = Number(n)  //transforma para seu tipo preferente de number baseado no valor  
var x = String(n)  //transforma para string  
```

### Formatando Strings  

```js
var s = "JavaScript"  //exemplo

'Eu estou estudando s'  //Não faz interpolação  
'Eu estou aprendendo' + s  //Usa concatenação   
`Eu estou aprendendo ${s}`  //Usa template sting (crase em vez de aspas)  

s.length  //quantos caracteres a string tem   
s.toUpperCase()  //tudo para 'MAIÚSCULAS'  
s.toLowerCase()  //tudo para 'minúsculas'  
```

### Formatando Números

```js
var n1 = 1543.2  //exemplo

n1.toFixed(2)  //faz aparecer dois números após o ponto  
n1.toFixed(2).replace('.', ',')  // , troca o ponto pela vírgula (replace = troca, *só funciona em string)  
n1.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})  // , modelo monetário, dps adiciona o tipo da moeda.  
```

## Aula 07 -- OPERADORES ARITIMÉTICOS

### Operadores

```js
+   = soma  
-   = subtração  
*   = multiplicação 
/   = divisão  
%   = resto da divisão  
**  = potenciação
++  = incrementação por um
--  = decrementação por um
>   = maior que
<   = menor que
>=  = maior ou igual a
<=  = menor ou igual a
==  = valor igual
!=  = valor diferente
=== = tipo igual
!   = negação
&&  = and, e, conjunção
||  = or, ou, disjunção
```

### Operação curta

```js
n=n+x  ==  n+=x
```

### Precedência

```js
1º () ** /
2º > < >=
3º !
4º &&
5º ||
```

### Operador Ternário

```js
teste ? true : false
exemplo:
média >= 7.0 ? "Aprovado" : "Reprovado"
```

## DOM

- Document Object Model

### Árvore DOM

- Window
  - Location
  - Document
  - History

- HTML
  - Head
    - Meta
    - Title
  - Body
    - h1
    - p
      - strong
    - div

### Selecionando Elementos

Por marca

```js
getElementsByTagName()
```

Por ID

```js
getElementById()
```

Por Nome

```js
getElementsByName()
```

Por Classe

```js
getElementsByClassName()
```

Por Seletor

```js
querySelector()     //através de elementos CSS
querySelectorAll()  //através de elementos CSS
```

### Eventos DOM

<https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events>

### Funções

```js
function ação(parâmetro){
    bloco
}
```

## Condições

### Comandos

`if (condicao) {
    true
} else if (condicao 2) {
    true if the previous statement is false.
} else {
    true if everything is false
}

switch (condicao) {
    case valor 1:
        bloco  
        break
    case valor 2:
        bloco
        break
    case valor 3:
        bloco
        break
    default:
}`

### Tipos de Condição

*Condição simples* = apenas if.

*Condição composta* = if e else.

*Condições aninhadas* = if, else if, else.

*Condição Múltipla* = switch case.

## Repetições

### Comandos2

```js
while (condicao){
    comandos
}

do{
    comandos
} while (condicao)

for (inicio; teste; incrementação){
    comandos
}

for(let pos in num) //for reduzido

```
