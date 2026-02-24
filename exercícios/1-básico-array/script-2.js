function par_imp(num){
    let resto, resu

    resto = num%2

    resu = resto == 0 ? "Par" : "Impar" //Operador Ternário
//  variavel; Condição ; resul 1; resul 2


    return resu
}

console.log(par_imp(438309))