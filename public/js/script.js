var open = document.querySelector('header button.open');
var close = document.querySelector('header button.close');
var navbar = document.querySelector('header nav.navbar');
open.addEventListener('click', function() {
    navbar.style.transition = "all .3s linear";
    navbar.style.transform = "translate(0px)";
    navbar.style.opacity = 1;
})
close.addEventListener('click', function() {
        navbar.style.transition = "all .3s linear";
        navbar.style.transform = "translate(300px)";
        navbar.style.opacity = 0;
    })
var navbar = document.querySelector('header div.navbar')
window.addEventListener('scroll', function(){
    if(window.scrollY > 0){navbar.classList.add('fixed')}
    else{navbar.classList.remove('fixed')}
})