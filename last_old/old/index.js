
var icon = document.querySelector(".menu-icon");
var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");
var nav = document.querySelector(".nav");
var navtopics = document.querySelector(".nav-topics");
icon.addEventListener('click',fun=>{
    nav.classList.toggle("expend-menu");
    navtopics.classList.toggle("expend-topics");
    line1.classList.toggle("line1-anim");
    line2.classList.toggle("line2-anim");
    line3.classList.toggle("line3-anim");
});

