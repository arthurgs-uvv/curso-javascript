var num = [5, 8, 2, 9, 3]

console.log(num)

num [3] = 6

num.push(7)     //acrecenta um valor
//num.pull()      //retira um valor?

num.length      //diz o tamanho do array

num.sort()      //coloca em ordem os valores

for(let pos in num){
    console.log(num[pos])
}

num.indexOf(7)  //procura no vetor o valor 7 e retorna a posição, se não encontrar retorna -1