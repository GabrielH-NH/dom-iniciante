// ID
// getElementById seleciona e retorna elementos do DOM

const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

/* Retorna null caso não exista */
const naoExiste = document.getElementById('teste');


// CLASSE E TAG

/*Seleciona pela classe, retorna uma HTMLCollection*/
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

/*Seleciona todas as UL's, retorna uma HTMLCollection*/
const ul = document.getElementsByTagName('ul');

/*Retorna o primeiro elemento*/
console.log(gridSection[0]);


// SELETOR GERAL ÚNICO
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
const contato2 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

/*Busca dentro do Ul apenas*/
const navItem = primeiroUl.querySelector('li');



// SELETOR GERAL LISTA
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection2 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

/*Retorna o segundo elemento*/
console.log(gridSection[1]);

/* Diferente do getElementsByClassName, a lista aqui é estática */


primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
})