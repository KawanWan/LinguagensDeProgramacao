let aluno = {
    nome : "Kawan",
    idade : 21, 
    curso : "Análise e Desenvovlimento de Sistemas",
    matricula : 236737,

    mostrarInformacoes : function() {
        return "Nome: " + this.nome + ", " +
               "Idade: " + this.idade + ", " +
               "Curso: " + this.curso + ", " +
               "Matrícula: " + this.matricula;
    }
};

console.log(aluno.mostrarInformacoes());