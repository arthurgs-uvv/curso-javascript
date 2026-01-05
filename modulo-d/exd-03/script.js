function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano = document.getElementById('input-ano')
    var res = document.querySelector('div#res')
    if (ano.value.length == 0 || Number(ano.value) > ano_atual || (ano_atual - Number(ano.value) > 116)){
        window.alert("[ERRO] Tente Novamente")
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano.value)
        var genero = ''
        if (fsex[0].checked) {
            
        }
    }
}