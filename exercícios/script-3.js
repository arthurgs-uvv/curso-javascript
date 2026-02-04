function contador(ini, fim, passo){
    if(passo > 0){
        if(ini > fim){
            return console.log("Por favor digite valores válidos")
        } else{
            for(ini; ini<=fim; ini+=passo){
                console.log(ini)
            }
        }
    } else if (passo < 0){
        if(ini < fim){
            return console.log("Por favor digite valores válidos")
        } else {
            for(ini; ini>=fim; ini+=passo){
            console.log(ini)
            }
        }
    } else{
        return console.log('Por favor digite um passo diferente de zero')
    }
}

console.log(contador(0, 0, 0))