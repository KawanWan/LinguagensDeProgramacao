const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verificadorImpar(numeros) {
    let impares = [];
    let contador = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] % 2 === 1) {
            impares[contador] = numeros[index];
            contador++;
        }
    }

    return impares;
}

let impares = verificadorImpar(numeros);

console.log(impares);