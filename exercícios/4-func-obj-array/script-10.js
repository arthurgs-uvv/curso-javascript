/*
10) Desafio final — Gerenciador de tarefas (Entrevista) 

Crie: criarGerenciadorTarefas() 

Ela deve retornar um objeto com: 
adicionar(tarefa) 
concluir(indice) 
listar() 
totalPendentes() 

Regras: 
Lista de tarefas deve ser privada (closure) 
Cada tarefa deve ser: { descricao, concluida } 
listar() deve usar desestruturação 
totalPendentes() deve usar loop manual 
Não pode usar variável global 
Deve usar this corretamente
*/

function criarGerenciadorTarefas(){
    let listaTarefas = []
    
    return obj = {
        adicionar(tarefa){
            listaTarefas.push({descricao: tarefa, concluida: 0})
            return `Sua tarefa: "${tarefa}", agora está pendente.`
        },
        concluir(indice){
            indice -= 1
            listaTarefas[indice].concluida = 1
            return `Sua tarefa "${listaTarefas[indice].descricao}" foi concluída!`
        },
        listar(){
            let texto = 'Tarefas Pendentes:'
            let cont = 1
            for(let v of listaTarefas){
                if(v.concluida === 0){
                    texto += '\n' + cont + '. ' + v.descricao
                }
                cont++
            }
            return texto 
        },
        totalPendentes(){
            let cont = 0
            for(let v = 0; v < listaTarefas.length; v++){
                if(listaTarefas[v].concluida === 0){
                    cont++
                }
            }
            return `Você tem ${cont} tarefas pendentes.`
        }
    }
}

let lista1 = criarGerenciadorTarefas()

console.log(lista1.adicionar("Preciso arrumar meu quarto1"))
console.log(lista1.adicionar("Preciso arrumar meu quarto2"))
console.log(lista1.adicionar("Preciso arrumar meu quarto3"))
console.log(lista1.adicionar("Preciso arrumar meu quarto4"))
console.log(lista1.listar())
console.log(lista1.concluir(1))
console.log(lista1.concluir(2))
console.log(lista1.listar())
console.log(lista1.concluir(3))
console.log(lista1.totalPendentes())

/**
VERSÃO CORRIGIDA

function criarGerenciadorTarefas() {
    let listaTarefas = []

    return {
        adicionar(tarefa) {
            listaTarefas.push({ descricao: tarefa, concluida: false })
            return `Sua tarefa: "${tarefa}", agora está pendente.`
        },

        concluir(indice) {
            indice -= 1

            if (!listaTarefas[indice]) {
                return "Índice inválido."
            }

            if (listaTarefas[indice].concluida) {
                return "Essa tarefa já foi concluída."
            }

            listaTarefas[indice].concluida = true

            return `Sua tarefa "${listaTarefas[indice].descricao}" foi concluída!`
        },

        listar() {
            let texto = "Tarefas Pendentes:"
            let cont = 1

            for (let { descricao, concluida } of listaTarefas) {
                if (!concluida) {
                    texto += `\n${cont}. ${descricao}`
                }
                cont++
            }

            return texto
        },

        totalPendentes() {
            let cont = 0

            for (let i = 0; i < listaTarefas.length; i++) {
                if (!listaTarefas[i].concluida) {
                    cont++
                }
            }

            return `Você tem ${cont} tarefas pendentes.`
        }
    }
}
*/
