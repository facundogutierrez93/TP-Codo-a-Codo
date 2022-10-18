const MENUBTN = document.querySelector('.menu-btn');
const NAVMENU = document.querySelector('.nav-menu')
MENUBTN.addEventListener('click', () => {
    NAVMENU.classList.toggle('nav-menu_visible')
    MENUBTN.classList.toggle('open')
});