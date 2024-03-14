/* function myFunction(a, b) {
    return a + b;
}

console.log(myFunction(1, 2)); */

// Função anônima
/* let soma = function(a, b){
    return a + b;
}

console.log(soma(1, 2)); */

// Arrow Function
/* let soma = (a,b) => a + b;

console.log(soma(2,3)); */

//Array
/* let myArray = ["Kawan"];

let matriz = [["Kawan", 21, true],
             ["Maria", 22, false],
             ["Paulo", 20, true]];

console.log(matriz[0][0]); */

/* let pessoa = {
    nome: "Kawan",
    idade: 21,
    casado: false
};

console.log(pessoa.casado);

for (let prop in pessoa) {
    console.log(prop + ": " + pessoa[prop]);
} */

//============================================
let carro = {
    nome: "Celta",
    marca: "Crevolet",
    ano: 1970,
    cor: "branco",
    ligado: false,

    ligar: function () {
        this.ligado = true;
    }
}

console.log(carro.ligado);
carro.ligar();
console.log(carro.ligado);