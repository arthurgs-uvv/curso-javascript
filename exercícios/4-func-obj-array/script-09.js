/*
9) Desestruturação + array de objetos (Entrevista) 
Dado: 
let pessoas = [ { nome: "Ana", idade: 20 }, 
{ nome: "Carlos", idade: 30 }, 
{ nome: "Luiza", idade: 15 } ] 
  
Crie uma função que: 
Use desestruturação 
Retorne apenas os nomes das pessoas maiores de idade 
Não pode usar .map() nem .filter() 
Não pode modificar o array original
*/

function maiorIdade (obj){
    let arr = []

    for(let v of obj){
        let {nome, idade} = v

        if(idade >= 18){
            arr.push(nome)
        }
    }
    return arr
}

let pessoas = [ 
    { nome: "Ana", idade: 20 }, 
    { nome: "Carlos", idade: 30 }, 
    { nome: "Luiza", idade: 15 } 
] 

console.log(maiorIdade(pessoas))