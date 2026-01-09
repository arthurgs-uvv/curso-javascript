function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var mes_atual = data.getMonth()
    mes_atual++
    var dia_atual = data.getDate()
    var ano = document.getElementById('input-ano')
    var mes = document.getElementById('input-mes')
    var dia = document.getElementById('input-dia')
    var res = document.getElementById('res')

    if (ano.value.length == 0 || mes.value.length == 0 || mes.value > 12 || mes.value < 1 || dia.value.length == 0 || dia.value < 1 || dia.value > 31 || Number(ano.value) > ano_atual || (ano_atual - Number(ano.value) > 116)){
        window.alert("[ERRO] Por favor, preencha os dados corretamente")
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano_atual - ano.value
        var genero = ''
        var img = document.createElement('img')

        if (mes_atual < mes.value){
            idade--
        } else if (mes_atual = mes.value && dia_atual < dia){
            idade--
        }

        img.setAttribute('id', 'foto')
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.borderRadius = '100%'

        if (sex[0].checked) { //"Se o que estiver na posição [0] (masculino) estiver 'marcado' ou checado é verdadeiro"
            genero = "homem"
            
            if(idade < 3){ 
                //bebe
                img.setAttribute('src', './imagens/bebe.jpg')
            } else if (idade < 12){ 
                //crianca
                img.setAttribute('src', './imagens/crianca_homem.jpg')
            } else if (idade < 25){ 
                //jovem
                img.setAttribute('src', './imagens/jovem_homem.jpg')
            } else if (idade < 60){ 
                //adulto
                img.setAttribute('src', './imagens/adulto_homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso_homem.jpg')
            }
        } else {
            genero = " mulher"

            if(idade < 3){ 
                //bebe
                img.setAttribute('src', './imagens/bebe.jpg')
            } else if (idade < 12){ 
                //crianca
                img.setAttribute('src', './imagens/crianca_mulher.jpg')
            } else if (idade < 25){ 
                //jovem
                img.setAttribute('src', './imagens/jovem_mulher.jpg')
            } else if (idade < 60){ 
                //adulto
                img.setAttribute('src', './imagens/adulto_mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso_mulher.jpg')
            }
        }
        res.innerHTML = `<strong>Você nasceu em: ${dia.value + '/' + mes.value + '/' + ano.value} <br>Detectamos ${genero} com ${idade} anos.<!strong>`
        res.appendChild(img)
    }
}