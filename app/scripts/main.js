const toggler = document.getElementById('toggler');
const closeNav = document.getElementById('close');
const links = document.getElementsByClassName('links');
const nav = document.getElementById('show-nav');
const overlay = document.getElementById('overlay');

const showOverlay = () => {
  overlay.classList.toggle('overlay-show');
};

const showNav = () => {
  nav.classList.toggle('nav-show');
};

toggler.addEventListener('click', () => {
  showOverlay();
  showNav();
});

closeNav.addEventListener('click', () => {
  showOverlay();
  showNav();
});

Array.from(links).forEach((element) => {
  element.addEventListener('click', () => {
    tgl(false);
  });
});
