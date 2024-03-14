const numeros = [1, 2, 3, 4, 5];

let maiorNumero = 0;

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > maiorNumero) {
        maiorNumero = numeros[index]
    }
}

console.log(maiorNumero);