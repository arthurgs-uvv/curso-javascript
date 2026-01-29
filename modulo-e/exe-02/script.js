function tabuada(){
    var n = Number(window.document.getElementById("valor").value)
    var res = window.document.getElementById("res")
    var texto = ''

    for(var i = 1; i<=10; i++){
        texto += `${n} x ${i} = ${n*i} <br>`
    }

    res.innerHTML = texto
}