function contar(){
    var inicio = Number(window.document.getElementById("inicio").value)
    var fim = Number(window.document.getElementById("fim").value)
    var passo = Number(window.document.getElementById("passo").value)
    var res = window.document.getElementById("resposta")
    var texto = ''
    const emoji = "\u{1F600}"
    const emoji2 = "\u{1F603}"

    for(var i = inicio; i <= fim; i = i + passo){
        texto = texto + String(i) + emoji
    }

    texto = texto + emoji2

    res.innerHTML = (texto)
}