function limiteExec(func, limite){
    let cont = 0

    return function(){
        if(cont < limite){
            cont++
            func()
        }
    }
}

function ola() {
    console.log("Olá!")
}

let olaLimitado = limiteExec(ola, 3)

olaLimitado() // Olá!
olaLimitado() // Olá!
olaLimitado() // Olá!
olaLimitado() // Nada acontece
olaLimitado() // Nada acontece