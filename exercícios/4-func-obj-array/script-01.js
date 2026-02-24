//Array + método + this

/*
Crie um objeto carrinho com:

propriedade produtos (array vazio)
método adicionar(nome, preco)
método removerUltimo()
método total()

Regras:
adicionar deve usar this
total deve somar usando for...of
Não pode usar variável global
*/

let carrinho = {
    produtos: [],
    adicionar(nomeE, precoE){
        if(nomeE === "" || precoE == ""){
            console.log("Favor digitar valores válidos");
        } else{
            this.produtos.push({
                nome: nomeE,
                preco: precoE
            })
            console.log(`Você adicionou o produto ${nomeE} com valor R$${precoE} reais ao carrinho.`)
        }
    },
    removerUltimo(){
        this.produtos.pop()
        console.log("Você removeu o último produto adicionado ao carrinho.")
    }, 
    totalProdutos(){
        let soma = 0
        for(let v of this.produtos){
            soma += v.preco
        }
        console.log(`O valor total de seus ${this.produtos.length} produtos é R$${soma} reais`)
    }
}

carrinho.adicionar("cebola", 20)
console.log(carrinho.produtos[0])
carrinho.removerUltimo()
carrinho.adicionar("cebola", 20)
carrinho.adicionar("cenora", 50)
carrinho.adicionar("alface", 10)
carrinho.totalProdutos()
carrinho.removerUltimo()
carrinho.removerUltimo()
carrinho.totalProdutos()