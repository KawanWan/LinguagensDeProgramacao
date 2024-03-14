function inverterString(str) {
    return str.toLowerCase().split('').reverse().join('');
}

function ehPalindromo(str) {
    if (inverterString(str) == str.toLowerCase()) {
        return "É um palíndromo!";
    } else {
        return "Não é um palíndromo!";
    }
}

let strOriginal = "Teste";
let resultado = ehPalindromo(strOriginal);

console.log(resultado);