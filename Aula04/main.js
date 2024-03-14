const myArray = [10, 13, 10, 33, 45, 100];

let num18 = myArray.find(value => value > 18);
/*let num18 = myArray.find(findFunciton);

function findFunciton(value) {
    return value > 18;
}*/

const nomes = ["José", "Alan", "Cleber"];

let nome = nomes.filter(_nome => _nome.length > 5);

console.log(nome);