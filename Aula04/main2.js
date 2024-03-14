class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;       ;
    }
}

const animais = [
    new Animal("Cachorro", 7),
    new Animal('Gato', 3),
    new Animal('Papagaio', 15),
    new Animal('Hamster', 1),
    new Animal('Maritaca', 3)
];

let maior = animais.filter(a => a.idade > 5);

console.log(maior);