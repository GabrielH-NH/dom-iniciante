// DOCUMENT OBJECT MODEL (DOM)
// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

/* Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM. */



// WINDOW E DOCUMENT
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

/*
window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona
*/

const titulo = document.querySelector('h1')// Seleciona o primeiro h1
document.body; // Retorna o body
console.log(titulo)
/* window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades. */



// NODE
// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo2 = document.querySelector('h1');

titulo2.innerText; // retorna o texto;
titulo2.classList; // retorna as classes;
titulo2.id; // retorna o id;
titulo2.offsetHeight; // retorna a altura do elemento;

//titulo2.addEventListener('click', callback);
// ativa a função callback ao click no titulo