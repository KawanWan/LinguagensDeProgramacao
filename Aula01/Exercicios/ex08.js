function eVogal(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    return vogais.includes(letra.toLowerCase());
}

function contadorVogais(str) {
    letras = str.split('');

    let vogais = 0;
    for (let index = 0; index < str.length; index++) {
        if (eVogal(letras[index])) {
            vogais++;
        }
    }

    return "O número de vogais na frase é: " + vogais;
}
let frase = "Olá mundo!";
console.log(contadorVogais(frase));