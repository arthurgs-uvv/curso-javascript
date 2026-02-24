let aluno = {
    nome: "Arthur",
    idade: 21,
    notas: [10, 8, 8, 10]
}

function media(arr){
    let media = 0

    for(let t of arr){
        media += t
    }

    return media/(arr.length)
}

console.log("Nome: " + aluno.nome)
console.log("Media: " + media(aluno.notas))