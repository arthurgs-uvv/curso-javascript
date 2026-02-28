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
Não pode usar variável global Deve usar this corretamente
*/

function criarGerenciadorTarefas(){
    let listaTarefas = [{}]
    
    return obj = {
        adicionar(tarefa){
            listaTarefas.push({descricao: tarefa, concluida: 0})
            return `Sua tarefa: "${tarefa}", agora está pendente.`
        },
        concluir(indice){
            listaTarefas[indice].concluida = 0
            return `Sua tarefa "${listaTarefas[indice].descricao}", índice: ${indice} foi concluída!`
        },
        listar(){

        },
        totalPendentes(){

        }
    }
}

let lista1 = criarGerenciadorTarefas()

console.log(lista1.adicionar("Preciso arrumar meu quarto"))