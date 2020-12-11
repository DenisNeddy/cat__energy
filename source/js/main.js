let menuNav = document.querySelector('.site-nav');
let buttonNav = document.querySelector('.site-nav__button');


menuNav.classList.remove('site-nav__list--js');

buttonNav.addEventListener('click', function() {
  menuNav.classList.add('site-nav__nav--opened');
  if(menuNav.classList.contains('site-nav__nav--closed')){
    menuNav.classList.remove('site-nav__nav--closed');
    menuNav.classList.add('site-nav__nav--opened');
  } else {
    menuNav.classList.remove('site-nav__nav--opened');
    menuNav.classList.add('site-nav__nav--closed');
  }
  

})