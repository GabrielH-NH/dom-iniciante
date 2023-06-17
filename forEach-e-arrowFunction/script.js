// EXERCICIOS

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => console.log(item))

// Mostre o texto dos parágrafos no console

paragrafos.forEach((item) => console.log(item.innerText))

// Como corrigir os erros abaixo:
const imgs6 = document.querySelectorAll('img');

/*
imgs6.forEach(item, index => {
  console.log(item, index);
});

let item = 0;
imgs6.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);
*/

imgs6.forEach((item, index) => {
  console.log(item, index);
});

let item = 0;
imgs6.forEach(() => {
  console.log(item++);
});

imgs.forEach(() => i++);