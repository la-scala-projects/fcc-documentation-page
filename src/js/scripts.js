var navMenu = document.querySelector('.page__navigation');
var navButton = document.querySelector('.nav-button');
var navLink = document.querySelectorAll('.nav-link');

navButton.addEventListener('click', menuToggle);

function menuToggle () {
  if (navButton.classList.contains('nav-button--open')) {
    navButton.classList.remove('nav-button--open');
    navButton.classList.add('nav-button--close');
    navMenu.classList.add('page__navigation--active');
    return
  }  else {
    navButton.classList.remove('nav-button--close');
    navButton.classList.add('nav-button--open');
    navMenu.classList.remove('page__navigation--active');
    return
  }
}

document.querySelector('.nav-list').addEventListener('click', function (event){
  console.log(event.target.className);
  if (event.target.className === 'nav-link') {
    navButton.classList.remove('nav-button--close');
    navButton.classList.add('nav-button--open');
    navMenu.classList.remove('page__navigation--active');
  }
})
