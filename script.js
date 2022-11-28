var menu = document.querySelector('.hamburger');

menu.addEventListener('click', function(){
    document.querySelector(".nav").classList.toggle('toggle-button'); //adding the class toggle to the nav and removing it
});