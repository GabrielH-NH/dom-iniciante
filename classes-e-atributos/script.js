//EXERCICIOS

// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach((item) => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuItems.forEach((i) => {
  i.classList.remove('ativo')
  i.removeAttribute('class')
})

menuItems[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((i) => {
  if(i.hasAttribute('alt')) {
    console.log('Tem alt')
    console.log(`Imagem que possui o alt`, i)
  } else {
    console.log('Não possui alt')
  }
})

// Modifique o href do link externo no menu

const linkMenu = document.querySelector('a[href^="https"]')

linkMenu.setAttribute('href', 'https://www.facebook.com/profile.php?id=100002231348955')

