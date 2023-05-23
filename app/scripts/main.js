let toggler = document.getElementById('toggler')
let closeNav = document.getElementById('close')
let nav = document.getElementById('show-nav')
let overlay = document.getElementById('overlay')

toggler.addEventListener('click', e => {    
    overlay.classList.remove('overlay-hide')
    overlay.classList.add('overlay-show')
    nav.classList.toggle('nav-show')
})

closeNav.addEventListener('click', e => {
    overlay.classList.add('overlay-hide')
    overlay.classList.remove('overlay-show')
    nav.classList.remove('nav-show')
})
