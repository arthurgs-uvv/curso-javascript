function adicionar(){
    let numeros = [] 
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
            info.innerHTML += numeros
        }
    }
}




function finalizar(){

}