function calculaDobro(numero) {
    if (numero <= 0) {
        console.log("Só é aceito números maiores do que zero");
    } else {
        return numero * 2;
    }
}

numero = calculaDobro(2);
console.log(numero);