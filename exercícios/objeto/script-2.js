let aluno = {
    nome: "Arthur",
    idade: 21,
    notas: [10, 8, 8, 10],
    mediar(){
        let media = 0

        for(let t of this.notas){
            media += t
        }

        return media/(this.notas.length)
    }
}



console.log("Nome: " + aluno.nome)
console.log("Media: " + aluno.mediar())