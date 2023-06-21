// ADDEVENTLISTENER
// Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento

const img = document.querySelector('img')

img.addEventListener('click', () => {
  console.log('clicou')
})

/* o primeiro parametro('click') é o evento, no segundo é passada a function callback, e o terceiro é options, este terceiro é opcional */



// CALLBACK
// É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

const img2 = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img2.addEventListener('click', callback); // 🚀
img2.addEventListener('click', callback()); // undefined
img2.addEventListener('click', function() {
  console.log('Clicou');
})
img2.addEventListener('click', () => {
  console.log('Clicou');
})



// EVENT
// O primeiro parâmetro do callback é referente ao evento que ocorreu.

const img3 = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img3.addEventListener('click', callback);

/* Geralmente utilizam (e) como nome do parâmetro, porém pode ser qualquer nome, o primeiro parâmetro sempre será referente ao evento independente do nome que colocar */



// PROPRIEDADES DO EVENT
// O próprio (event) tem diversas propriedades que podemos usar

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);



// EVENT.PREVENTDEFAULT()
// Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);




// THIS
