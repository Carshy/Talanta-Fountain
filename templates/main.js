const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuX = document.querySelector('#menu-x');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  menuX.classList.toggle('active');
});

navLink.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));