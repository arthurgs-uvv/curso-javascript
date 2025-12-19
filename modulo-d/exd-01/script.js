var dataAtual = new Date()

var hora = dataAtual.getHours()

if (hora <= 6 ){
    var textoHora = window.document.getElementById(textoHora)
    var imgHora = window.document.getElementById(imgHora)

    textoHora.innerHTML = `Agora são ${hora} horas da madrugada`
}

else if (hora >= 18){
    var txtHora = window.document.getElementById(textoHora).value
    var imgHora = window.document.getElementById(imgHora)

    txtHora.innerHTML = `Agora são ${hora} horas da noite`
}