/* const pi = 3.14;

console.log(pi); */

// Comentário de uma linha

/* Comentário 
de várias linhas
ALT+SHIFT+A para comentar e descomentar*/

/* const nome = "Kawan";

console.log(nome.charAt(3));
console.log(nome.charCodeAt(0));
console.log(nome.replace("Ka", "XX"));
console.log(nome.length);
console.log(nome.endsWith("n"));
console.log(nome.endsWith("b"));
console.log(nome.indexOf("a")); */

let nome = "Lucas";
let sobrenome = "Santos";
console.log(typeof(nome));

let idade = 25;
console.log(typeof(idade));

let isMaiorDeIdade = true;
console.log(typeof(isMaiorDeIdade));

let preco = 10.5;
console.log(typeof(preco));

console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos de idade`);

function soma(a, b) {
    return a+b;
}

console.log(soma(2, 3));