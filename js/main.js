const nav__btn = document.querySelector('.mobile__btn');
const nav = document.querySelector('.header__nav');
const img = document.querySelector('.img-mobile__nav');

nav__btn.onclick = function(){
    if(nav.classList.toggle('open')){
        img.src = './img/mobile/nav_close.svg';
    }else{
        img.src = './img/mobile/mobile_menu.svg';
    }
}