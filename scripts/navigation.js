

document.addEventListener('DOMContentLoaded', () => {
  // Cria o botão de menu (hamburger)
  const menuButton = document.createElement('button');
  menuButton.id = 'menuButton';
  menuButton.setAttribute('aria-label', 'Open Menu');
  menuButton.innerHTML = '&#9776;'; // ícone hamburger
  document.querySelector('nav').prepend(menuButton);

  // Referência ao menu
  const navMenu = document.querySelector('.navigation');

  // Ação de clique
  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
  });
});
