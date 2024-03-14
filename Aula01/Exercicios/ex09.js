function verificarEmail(str) {
    let verificador = str.split('');

    let contadorSimbolo = 0;
    let contadorPonto = 0;
    let posicaoSimbolo = 0;
    let posicaoPonto = 0;

    for (let index = 0; index < verificador.length; index++) {

        if (verificador[index] == '@') {
            contadorSimbolo++;
            posicaoSimbolo = index;
        }
        if (verificador[index] == '.') {
            contadorPonto++;
            posicaoPonto = index;
        }

    }

    if (contadorSimbolo == 1 && contadorPonto > 0 && posicaoPonto > posicaoSimbolo) {
        return "O email é válido!";
    } else {
        return "O email não é válido";
    }
}

let email = "kawan.wan18@gmail.com";
console.log(verificarEmail(email));