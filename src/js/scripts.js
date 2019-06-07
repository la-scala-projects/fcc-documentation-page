var navMenu = document.querySelector('.page__navigation');
var navButton = document.querySelector('.nav-button');
var navList = document.querySelector('.nav-list');

navButton.addEventListener('click', menuToggle);

function menuToggle() {
  if (navButton.classList.contains('nav-button--open')) {
    menuOpen();
  } else {
    menuClose();
  }
}

navList.addEventListener('click', function(event) {
  if (event.target.className === 'nav-link') {
    menuClose();
  }
})

function menuClose() {
  navButton.classList.remove('nav-button--close');
  navButton.classList.add('nav-button--open');
  navMenu.classList.remove('page__navigation--active');
}

function menuOpen() {
  navButton.classList.remove('nav-button--open');
  navButton.classList.add('nav-button--close');
  navMenu.classList.add('page__navigation--active');
}
