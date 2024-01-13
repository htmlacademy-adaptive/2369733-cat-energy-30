window.addEventListener('load', () => {
  const button = document.querySelector('.js-burger');
  const navMenu = document.querySelector('.js-nav-menu');
  const headerWr = document.querySelector('.header__wrraper');

  navMenu.classList.remove('is-active');
  button.classList.remove('js-no');
  headerWr.classList.remove('no-js-header');
  navMenu.classList.remove('no-js-site-list');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    button.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });
});
