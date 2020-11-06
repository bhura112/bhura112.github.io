function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function myHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       document.getElementById("title-description").style.display = "none";
       document.getElementById("title-logo-img").style.display = "none";
       document.getElementById("title-row").style.width = "100%";

    } else {
        document.getElementById("title-description").style.display = "block";
        document.getElementById("psh-title-name").style.display = "block";
        document.getElementById("title-logo-img").style.display = "block";
        document.getElementById("title-row").style.width = "80%";
    }
}

function getDivPlacement(divID) {
    return $('#' + divID).position().top + $('#' + divID).height();
}

function adjustPlacement() {
//jQuery
var headerPlacement = getDivPlacement('web-header');
$("#top-banner").css({ top: headerPlacement + 'px' });

var contentPlacement = getDivPlacement('top-banner');
//$('#page-content').css('margin-top',contentPlacement);
}
$(document).ready(function() {
     adjustPlacement();
 });
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {
        myFunction();
        myHeader();
    };

