window.addEventListener('load', () => {
  const button = document.querySelector('.js-burger');
  const navMenu = document.querySelector('.js-nav-menu');

  navMenu.classList.remove('is-active');
  button.classList.remove('no--js');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    button.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });
});
