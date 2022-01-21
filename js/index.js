var preloader = document.querySelector('.preloader');
window.addEventListener('load', function() {
    preloader.parentElement.removeChild(preloader);
    document.querySelector('.preloader-overflow').classList.remove('preloader-overflow')
})

var activePage = window.location.pathname;
var Links = document.querySelectorAll('.nav-btn').
forEach(link => {
    if (link.href == (activePage)) {
        link.classList.add('active-nav-underline')
    }
})


var parallax_effect = document.getElementById('header');
window.addEventListener('scroll', function() {
    let position = window.pageYOffset;
    parallax_effect.style.backgroundPositionY = `${position * 1}px`;
})


var breakfast = document.getElementById('breakfast');
breakfast.addEventListener('click', function() {
    this.classList.add('manu_active');
    drinks.classList.remove('manu_active');
    lunch.classList.remove('manu_active');
    dinner.classList.remove('manu_active');
    drinks.classList.remove('basic_clicked_effect');
    let breakfast_images = document.querySelector('.breakfast_images');
    breakfast_images.style.zIndex = 999;
    let lunch_images = document.querySelector('.lunch_images');
    lunch_images.style.zIndex = -99;
    let drinks_images = document.querySelector('.drinks_images');
    drinks_images.style.zIndex = -99;
    let dinner_images = document.querySelector('.dinner_images');
    dinner_images.style.zIndex = -99;
})
var lunch = document.getElementById('lunch');
lunch.addEventListener('click', function() {
    this.classList.add('manu_active');
    breakfast.classList.remove('manu_active');
    drinks.classList.remove('manu_active');
    dinner.classList.remove('manu_active');
    drinks.classList.remove('basic_clicked_effect');
    let lunch_images = document.querySelector('.lunch_images');
    lunch_images.style.zIndex = 1;
    let drinks_images = document.querySelector('.drinks_images');
    drinks_images.style.zIndex = 0;
    let dinner_images = document.querySelector('.dinner_images');
    dinner_images.style.zIndex = 0;
    let breakfast_images = document.querySelector('.breakfast_images');
    breakfast_images.style.zIndex = 0;
});
var dinner = document.getElementById('dinner');
dinner.addEventListener('click', function() {
    this.classList.add('manu_active');
    breakfast.classList.remove('manu_active');
    lunch.classList.remove('manu_active');
    drinks.classList.remove('manu_active');
    drinks.classList.remove('basic_clicked_effect');
    let dinner_images = document.querySelector('.dinner_images');
    dinner_images.style.zIndex = 1;
    let lunch_images = document.querySelector('.lunch_images');
    lunch_images.style.zIndex = 0;
    let breakfast_images = document.querySelector('.breakfast_images');
    breakfast_images.style.zIndex = 0;
    let drinks_images = document.querySelector('.drinks_images');
    drinks_images.style.zIndex = 0;

});
var drinks = document.getElementById('drinks');
drinks.addEventListener('click', function() {
    this.classList.add('manu_active');
    breakfast.classList.remove('manu_active');
    lunch.classList.remove('manu_active');
    dinner.classList.remove('manu_active');
    drinks.classList.remove('basic_clicked_effect');
    let drinks_images = document.querySelector('.drinks_images');
    drinks_images.style.zIndex = 1;
    let dinner_images = document.querySelector('.dinner_images');
    dinner_images.style.zIndex = 0;
    let lunch_images = document.querySelector('.lunch_images');
    lunch_images.style.zIndex = 0;
    let breakfast_images = document.querySelector('.breakfast_images');
    breakfast_images.style.zIndex = 0;

})

var under_line_1 = document.querySelector('.underline1');
var under_line_2 = document.querySelector('.underline2');
var food_menu_link = document.querySelector('.food_menu_link');
food_menu_link.addEventListener('mouseover', function() {
    this.style.color = 'rgb(243, 173, 184)';
    this.style.textDecoration = 'none'
    under_line_1.style.transform = 'translateX(-80px)'
    under_line_1.style.opacity = '0.0'
})

food_menu_link.addEventListener('mouseout', function() {
    this.style.color = 'white';
    under_line_1.style.transform = 'translateX(0px)';
    under_line_1.style.opacity = '1'

})
food_menu_link.addEventListener('mouseover', function() {
    under_line_2.style.transform = 'translateX(80px)'
    under_line_2.style.opacity = '0.0'
})

food_menu_link.addEventListener('mouseout', function() {
    under_line_2.style.transform = 'translateX(0px)';
    under_line_2.style.opacity = '1'

})

var under_line_3 = document.querySelector('.underline3');
var under_line_4 = document.querySelector('.underline4');
var book_a_table_link = document.querySelector('.book-a-table-link-btn');
book_a_table_link.addEventListener('mouseover', function() {
    this.style.color = 'rgb(243, 173, 184)';
    this.style.textDecoration = 'none'
    under_line_3.style.transform = 'translateX(-60px)'
    under_line_3.style.opacity = '0.0'
})

book_a_table_link.addEventListener('mouseout', function() {
    this.style.color = 'white';
    under_line_3.style.transform = 'translateX(0px)';
    under_line_3.style.opacity = '1'

})
book_a_table_link.addEventListener('mouseover', function() {
    under_line_4.style.transform = 'translateX(60px)'
    under_line_4.style.opacity = '0.0'
})

book_a_table_link.addEventListener('mouseout', function() {
    under_line_4.style.transform = 'translateX(0px)';
    under_line_4.style.opacity = '1'

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