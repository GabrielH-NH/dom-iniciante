// EXERCICIOS


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]')

function ativo(event) {
  event.preventDefault();
  links.forEach((i) => {
    i.classList.remove('ativo')
  })

  event.currentTarget.classList.add('ativo')
}

links.forEach((i) => {
  i.addEventListener('click', ativo)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function verificar(event) {
  event.currentTarget.remove()
}

todosElementos.forEach((i) => {
  i.addEventListener('click', verificar)
})



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('texto-maior')
  }
}

window.addEventListener('keydown', handleClickT)