const opened = document.querySelector('.page-header__togler--opened');
const site = document.querySelector('.page-header__nav');
const togler = document.querySelector('.page-header__togler');

opened.onclick = function () {
  opened.classList.toggle('page-header__togler--opened');
  opened.classList.toggle('page-header__togler--closed');
  if (togler.classList.contains('page-header__togler--opened')) {
    site.classList.add('page-header__nav-closed');
  } else {
    site.classList.remove('page-header__nav-closed');
  }
};

