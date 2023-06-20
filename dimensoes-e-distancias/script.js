// EXERCICIOS

// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImg = document.querySelector('img')

console.log(firstImg.offsetTop) // 360px

// Retorne a soma da largura de todas as imagens


function somaImagens() {
  const imagens = document.querySelectorAll('img')
  let soma = 0;
  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });

  console.log(soma)

}

window.onload = () => {
  somaImagens()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) => {
  const linkWidth = links.offsetWidth
  const linkHeight = links.offsetHeight

  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log('Possui o minimo recomendado')
  } else {
    console.log('Não Possui o minimo')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector('nav');
const small = window.matchMedia('(max-width: 720px)');

if (small.matches) {
  menu.classList.add('menu-mobile')
} else {
  console.log('N')
}
