let produtos = [
    {
        nome: "Carne",
        preco: 100.00
    },
    {
        nome: "Grill",
        preco: 5.00
    },
    {
        nome: "Carvao",
        preco: 1125.00
    },
    {
        nome: "Linguica",
        preco: 50.00
    }
]


let total = 0
let caro = 0
let produtoCaro = 0

for (let produto of produtos){
    total += produto.preco

    if(produto.preco > caro){
        caro = produto.preco
        produtoCaro = produto.nome
    } 
}



console.log("O valor total dos seus produtos é: " + total)
console.log("O produto mais caro é: " + produtoCaro)
