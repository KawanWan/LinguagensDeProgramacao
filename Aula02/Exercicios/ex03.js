const numeros = [10, 20, 30, 40, 50];

function soma(numeros) {
    let resultado = 0;

    for (let index = 0; index < numeros.length; index++) {
        resultado = resultado + numeros[index];       
    }

    return resultado;
}

console.log("A soma dos elementos do array é igual a: " + soma(numeros));