function inverterString(str) {
    return str.split('').reverse().join('');
}

let strOriginal = "Teste";
let strInvertido = inverterString(strOriginal);

console.log(strInvertido);