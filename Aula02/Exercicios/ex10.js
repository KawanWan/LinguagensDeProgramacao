function alunosMaior(arrayDeAlunos) {
    let alunosMaiores = arrayDeAlunos.filter(function (aluno) {
        return aluno.idade > 18;
    });

    return alunosMaiores;
}

let alunos = [
    { nome: "João", idade: 20, curso: "Engenharia", matricula: 123 },
    { nome: "Maria", idade: 18, curso: "Medicina", matricula: 456 },
    { nome: "José", idade: 22, curso: "Arquitetura", matricula: 789 },
];

let alunosMaioresDe18 = alunosMaior(alunos);
console.log(alunosMaioresDe18);
