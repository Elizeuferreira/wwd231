// navigation.js

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.createElement('button');
  menuBtn.id = 'menu';
  menuBtn.innerHTML = '&#9776;';
  menuBtn.setAttribute('aria-label', 'Menu');
  document.querySelector('nav').prepend(menuBtn);

  const navMenu = document.querySelector('.navigation');
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });
});
