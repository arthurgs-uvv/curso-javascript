function carregar(){    
    var dataAtual = new Date()
    var hora = dataAtual.getHours()
    var textoHora = window.document.getElementById('textoHora')
    var imgHora = window.document.getElementById('imgHora')

    textoHora.innerHTML = `Agora são ${hora} horas`

    if (hora <= 5){
        imgHora.src = './imagens/img-madrugada.png'
        document.body.style.background = '#000000ff'
    }
    else if (hora <= 11){
        imgHora.src = './imagens/img-manha.jpg'
        document.body.style.background = '#db8f00ff'
    }
    else if (hora <= 17){
        imgHora.src = './imagens/img-tarde.jpg'
        document.body.style.background = '#ffe600ff'
    }
    else{
        imgHora.src = './imagens/img-noite.jpg'
        document.body.style.background = '#020075ff'
    }
}