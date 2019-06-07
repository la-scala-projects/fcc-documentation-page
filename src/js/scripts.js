var navMenu = document.querySelector('.page__navigation');
var navButton = document.querySelector('.nav-button');
var navLink = document.querySelector('.nav-link');

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

navLink.addEventListener('click', () => {
  console.log(navLink);
});

function goToArticle () {
  navButton.classList.remove('nav-button--close');
  navButton.classList.add('nav-button--open');
  navMenu.classList.remove('page__navigation--active');
  console.log("Success");
}
