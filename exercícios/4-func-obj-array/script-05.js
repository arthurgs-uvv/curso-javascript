/*
5) Escopo + armadilha do var (Intermediário)

Explique por que isso acontece:

for(var i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000)
}

Ele imprime:

3
3
3

Corrija para imprimir:

0
1
2

Sem usar setTimeout diferente.
*/

for(let i = 0; i < 3; i++){
    setTimeout(function(){
        console.log(i)
    }, 1000)
}

/*
R: Ela acontece pois o "var i" tem escopo de função, não de escopo, logo o "i" de console.log() guardava a referência de i, não o valor, e como ele retornava o console apenas após 1 segundo, todo o for já tinha sido executado e variável i valia 3 ao final.
*/