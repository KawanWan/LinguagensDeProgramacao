function obterPrimeiroUltimoNome(nomeCompleto) {

    const partesNome = nomeCompleto.toLowerCase().split('');


    if (partesNome.length >= 2) {

        return `${partesNome[0]}.${partesNome[partesNome.length - 1]}@facens.br`;
    } else {

        return 'Formato de nome incorreto. Por favor, forneça pelo menos o primeiro e o último nome.';
    }
}

const nomeCompleto = "Kawan Wan Der Maas do Nascimento";

const emailFacens = obterPrimeiroUltimoNome(nomeCompleto);
console.log(emailFacens);
