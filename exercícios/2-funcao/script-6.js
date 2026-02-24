function criarConta(saldoInicial){
    let saldo = saldoInicial

    return {
            depositar(valor){
                saldo += valor
            }, sacar(valor){
                saldo -= valor
            }, verSaldo(){
                return saldo
            }
        }
    }


let conta1 = criarConta(2000)
let conta2 = criarConta(10)

console.log(conta1.depositar(50))
console.log(conta1.verSaldo())
console.log(conta1.sacar(2000))
console.log(conta1.verSaldo())
console.log(conta2.sacar(10))
console.log(conta2.verSaldo())

