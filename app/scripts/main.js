const toggler = document.getElementById('toggler');
const closeNav = document.getElementById('close');
const links = document.getElementsByClassName('links')
const nav = document.getElementById('show-nav');
const overlay = document.getElementById('overlay');

toggler.addEventListener('click', () => {
  tgl(true)
});

closeNav.addEventListener('click', () => {
  tgl(false)
  console.log('hello')
});

Array.from(links).forEach(element => {
  element.addEventListener('click', () => {
    tgl(false)
  })
});

const tgl = (show) => {
  if (show) {
    overlay.classList.remove('overlay-hide');
    overlay.classList.add('overlay-show');
    nav.classList.toggle('nav-show');
  } else {
    overlay.classList.add('overlay-hide');
    overlay.classList.remove('overlay-show');
    nav.classList.remove('nav-show');
  }
}
