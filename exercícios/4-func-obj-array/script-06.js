/*
6) Objeto + closure privado (Sólido) 

Crie: criarUsuario(nome) 

Ela deve retornar um objeto com: 
saudar() 
mudarNome(novoNome) 
verNome() 

⚠️ O nome deve ser privado 
⚠️ Não pode acessar diretamente: usuario.nome 
⚠️ Só pode acessar via método

*/

function criarUsuario(nome){
    let nomeUsuario = nome

    return obj = {
        saudar(){
            console.log(`Olá ${nomeUsuario}, espero que esteja bem!`)
        },
        mudarNome(novoNome){
            nomeUsuario = novoNome
            console.log(`Seu nome foi alterado para: ${nomeUsuario}`)
        },
        verNome(){
            console.log("Nome: " + nomeUsuario)
        }
    }
}

let perfil1 = criarUsuario("Arthur Gomes")

perfil1.saudar()
perfil1.mudarNome("Khrystopher Regini")
perfil1.verNome()
perfil1.saudar()