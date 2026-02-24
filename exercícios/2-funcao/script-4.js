let objeto = {
    nome: "Arthur",
    aglutinar1 (item1, item2){
        return item1 + item2
    },
    aglutinar2: (item1, item2) => item1 + item2    
}

console.log("Meu nome é " + objeto.nome)
console.log(objeto.aglutinar1(objeto.nome, " sou aluno da UVV"))
console.log(objeto.aglutinar2(objeto.nome, " sou aluno da Multivix"))