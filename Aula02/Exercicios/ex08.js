const produto = {
    nome : "barbeador",
    preco : 99.90,
    quantidade : 500,

    calcularTotal : function() {
        return this.preco * this.quantidade;
    }
}

console.log("Valor total: R$" + produto.calcularTotal());