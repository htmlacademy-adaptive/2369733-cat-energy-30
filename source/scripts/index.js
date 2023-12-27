window.addEventListener("load", (event) => {
  const button = document.querySelector('.js-burger');
  const navMenu = document.querySelector('.js-nav-menu');

  navMenu.classList.remove('site-list--nojs');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    button.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });
});

