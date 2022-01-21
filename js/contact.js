var preloader = document.querySelector('.preloader');
window.addEventListener('load', function() {
    preloader.parentElement.removeChild(preloader);
    document.querySelector('.preloader-overflow').classList.remove('preloader-overflow')
})


var activePage = window.location.pathname;
var navLinks = document.querySelectorAll('.nav-btn').
forEach(link => {
    if (link.href.includes(activePage)) {
        link.classList.add('active-nav-underline')
    }
})
var parallax_effect = document.getElementById('header');
window.addEventListener('scroll', function() {
    let position = window.pageYOffset;
    parallax_effect.style.backgroundPositionY = `${position * 1}px`;
})
var bar_icon = document.querySelector('.bar_icon');
var menu_icon = document.querySelector('.fa-bars');
var cake_icon = document.querySelector('.fa-birthday-cake');
var close_icon = document.querySelector('.fa-times-circle');

bar_icon.addEventListener('mouseover', function() {
    menu_icon.style.display = 'none';
    cake_icon.style.display = 'block';
})

bar_icon.addEventListener('mouseout', function() {
    menu_icon.style.display = 'block';
    cake_icon.style.display = 'none';
})

bar_icon.addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('.manubar').style.display = 'block';
    document.querySelector('.social_logo').style.zIndex = 10000;
})

close_icon.addEventListener('click', function() {
    document.querySelector('.manubar').style.display = 'none';
    bar_icon.style.display = 'block';
    document.querySelector('.social_logo').style.zIndex = -99;
})

var activePage = window.location.pathname;
console.log(activePage);