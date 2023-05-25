const toggler = document.getElementById('toggler');
const closeNav = document.getElementById('close');
const links = document.getElementsByClassName('links');
const nav = document.getElementById('show-nav');
const overlay = document.getElementById('overlay');
let closeModal = document.querySelector('[id=close-modal]');

const showOverlay = () => {
  overlay.classList.toggle('overlay-show');
};

const showNav = () => {
  nav.classList.toggle('nav-show');
};

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  showModal();
});

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
