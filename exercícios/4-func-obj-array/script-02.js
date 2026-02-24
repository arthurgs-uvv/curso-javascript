//Desestruturação + função

/*
Dado:

let usuario = {
    nome: "Arthur",
    idade: 21,
    endereco: {
        cidade: "Vitória",
        estado: "ES"
    }
}

Crie uma função:

mostrarDados(obj)

Que use desestruturação no parâmetro para imprimir:

Arthur mora em Vitória - ES
*/

let usuario = {
    nome: "Arthur",
    idade: 21,
    endereco: {
        cidade: "Vitória",
        estado: "ES"
    }
}

function mostrarDados({nome, idade, endereco: {cidade, estado:uf}}){
    return `${nome} mora em ${cidade} - ${uf} e tem ${idade} anos.`
}

console.log(mostrarDados(usuario))
