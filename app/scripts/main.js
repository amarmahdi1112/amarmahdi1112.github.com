const toggler = document.getElementById('toggler');
const closeNav = document.getElementById('close');
const nav = document.getElementById('show-nav');
const overlay = document.getElementById('overlay');

toggler.addEventListener('click', () => {
    overlay.classList.remove('overlay-hide');
    overlay.classList.add('overlay-show');
    nav.classList.toggle('nav-show');
});

closeNav.addEventListener('click', () => {
    overlay.classList.add('overlay-hide');
    overlay.classList.remove('overlay-show');
    nav.classList.remove('nav-show');
});
