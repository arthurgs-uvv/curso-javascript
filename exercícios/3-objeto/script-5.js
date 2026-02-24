let obj = [
{
    nome: "Arthur",
    idade: 21
},
{
    nome: "Luana",
    idade: 55
},
{
    nome: "Willain",
    idade: 78
},
{
    nome: "Wilson",
    idade: 2
}
]

function analisador(arr){
    let objeto2 = {
        totalPessoas: 0,
        mediaIdade: 0,
        maiorIdade: arr[0].idade,
        menorIdade: arr[0].idade
    }
    let idadeTotal = 0

    objeto2.totalPessoas = arr.length //obter o total de pessoas

    for(let t in arr){
        idadeTotal += arr[t].idade
        if(arr[t].idade > objeto2.maiorIdade){
            objeto2.maiorIdade = arr[t].idade
        }
        if(arr[t].idade < objeto2.menorIdade){
            objeto2.menorIdade = arr[t].idade
        } 
    }
    objeto2.mediaIdade = idadeTotal/objeto2.totalPessoas

    return objeto2
}


console.log(analisador(obj))