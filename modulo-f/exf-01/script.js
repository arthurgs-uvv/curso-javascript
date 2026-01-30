function adicionar(){
    let num = Number(window.document.getElementById('num').value)
    let info = window.document.getElementById('info')
    
    x = numeros.indexOf(num)

    if(x != -1){
        window.alert('Favor não repetir valores')
    } else{
        if(num > 100 || num < 1){
        window.alert('Favor digite um valor válido')
        } else {
            numeros.push(num)
            info.innerHTML += `Valor ${num} adicionado <br>`
        }
    }
    document.getElementById('num').value = "";
    res.innerHTML = ""
}

function finalizar(){
    let soma = 0
    numeros.sort(function(a, b){return a-b})


    if (numeros == ''){
        window.alert('Favor digite valores antes de finalizar')
    } else{
        for(let t in numeros){
            soma += numeros[t]
        }

        res.innerHTML = `
        Ao todo, temos ${numeros.length} números cadastrados. <br><br>
        O maior valor informado foi ${numeros[numeros.length -1]} <br><br>
        O menor valor informado foi ${numeros[0]} <br><br>
        Somando todos os valores, temos ${soma} <br><br>
        A média dos valores digitados é ${soma/numeros.length}
        `
    }
}

let numeros = [] 
let res = document.getElementById('res')