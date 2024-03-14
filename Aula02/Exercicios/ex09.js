let endereco = {
    rua: "Rua XYZ",
    numero: 123,
    bairro: "Bairro ABC",
    cidade: "Cidade ABC"
};

for (let propriedade in endereco) {
    if (endereco.hasOwnProperty(propriedade)) {
        console.log(`${propriedade}: ${endereco[propriedade]}`);
    }
}