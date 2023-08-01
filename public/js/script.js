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
    // var body = document.querySelector('body');
    // body.document.addEventListener('click', function() {
    //     navbar.style.transition = "all .3s linear";
    //     navbar.style.transform = "translate(300px)";
    //     navbar.style.opacity = 0;
    // })

var down = document.querySelector('button.down');
down.addEventListener('click', function() {
    var height = window.outerHeight;;
    window.scrollTo(0, height);
})