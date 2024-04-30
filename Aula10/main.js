/* let titulo = document.querySelector('#titulo');

console.log(titulo.innerHTML);

titulo.innerHTML = 'Um app da Facens';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Aula 10'; */

let paragrafo = document.querySelector('p');
let titulo = document.querySelector('#titulo');

function mudarImagem() {
    let minhaImagem = document.querySelector('img');
    minhaImagem.src = 'imagens/horse.png';
}


document.querySelector('#mudarTitulo').onclick = function () {
    titulo.innerHTML = 'Novo Título';
};

document.querySelector('#mudarEstilo').onclick = function () {
    titulo.classList.add('novoTitulo');
    
    paragrafo.style.color = "red";
    paragrafo.style.fontSize = '30px';
};

document.querySelector('#removeEstilo').onclick = function () {
    titulo.classList.remove('novoTitulo');

    paragrafo.style.color = '';
    paragrafo.style.fontSize = '';
}





