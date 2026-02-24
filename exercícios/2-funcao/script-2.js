function executarOperacao(a1, a2, a3){
    return a3(a1, a2)
}

console.log(executarOperacao(100, 50, (x,y) => x - y))