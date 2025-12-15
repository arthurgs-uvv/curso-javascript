# CONTEÚDO SOBRE JAVA SCRIPT

## Aula 01 -- CLIENTE X SERVER
```
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
```
//  
/* */  

var a //cria uma variável a (identificador)  
```  
### Identificadores
```
Podem começar com letra, $ ou _  
Não podem começar com números  
É possível usar letras ou números  
É possível usar acentos e símbolos  
Não podem conter espaços  
Não podem ser palavras reservadas (ex: fuction, var)  
```

### Data Types
```
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
```
typeof(a)  //Diz qual o tipo de dado da variável "a"  
```
###Transformando tipo de dados
```
Number.parseInt(n)  //transforma para int  
Number.parseFloat(n)  //transforma para float  
var x = Number(n)  //transforma para seu tipo preferente de number baseado no valor  
var x = String(n)  //transforma para string  
```
### Formatando Strings  
```
var s = 'JavaScript´  //exemplo

'Eu estou estudando s'  //Não faz interpolação  
'Eu estou aprendendo' + s  //Usa concatenação   
`Eu estou aprendendo ${s}`  //Usa template sting (crase em vez de aspas)  

s.length  //quantos caracteres a string tem   
s.toUpperCase()  //tudo para 'MAIÚSCULAS'  
s.toLowerCase()  //tudo para 'minúsculas'  
```
### Formatando Números
```
var n1 = 1543.2  //exemplo

n1.toFixed(2)  //faz aparecer dois números após o ponto  
n1.toFixed(2).replace('.', ',')  // , troca o ponto pela vírgula (replace = troca, *só funciona em string)  
n1.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})  // , modelo monetário, dps adiciona o tipo da moeda.  
```
## Aula 07 -- OPERADORES ARITIMÉTICOS

### Operadores 
```
+ = soma  
- = subtração  
* = multiplicação 
/ = divisão  
% = resto da divisão  
** = potenciação
```
