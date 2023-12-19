const opened = document.querySelector('.page-header__button--opened');
const site = document.querySelector('.page-header__nav');
const togler = document.querySelector('.page-header__togler');

opened.onclick = function () {
  opened.classList.toggle('page-header__button--opened');
  opened.classList.toggle('page-header__button--closed');
  if (togler.classList.contains('page-header__button--opened')) {
    site.classList.add('page-header__nav-closed');
  } else {
    site.classList.remove('page-header__nav-closed');
  }
};

