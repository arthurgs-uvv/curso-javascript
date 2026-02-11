let conta = {
    titular: "Arthur Gomes Siqueira",
    saldo: 1000.00,
    depositar(valor){
        console.log(`Você está depositando ${valor} reais`)
        this.saldo += valor
        console.log(`Seu valor de saldo agora é: ${this.saldo}`)
    },
    sacar(valor){
        console.log(`Você está sacando ${valor} reais`)
        if(valor > this.saldo){
            console.log(`Você não tem este valor em conta\nFavor sacar um valor menor\nSeu valor atual é: R$${this.saldo}`)
        } else{
            this.saldo -= valor
            console.log(`Seu valor em conta agora é: ${this.saldo}`)
        }
    }
}

conta.depositar(423.40)
conta.sacar(1000.00)
conta.depositar(100)
conta.sacar(10000.00)
conta.depositar(142717302.00)
conta.sacar(conta.saldo)