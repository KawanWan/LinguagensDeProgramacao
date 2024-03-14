let sequencia = "1- ";

for (let index = 2; index <= 10; index++) {
    if (index < 10) {
        sequencia = sequencia + index + "- ";
    } else {
        sequencia = sequencia + index;
    }
}

console.log(sequencia);
