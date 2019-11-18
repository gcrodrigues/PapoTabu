$(function() {
    $(".toggle").on("click", function() {
        if ($(".iten").hasClass("active")) {
            $(".iten").removeClass("active");
        } else {
            $(".iten").addClass("active");
        }
    });
});


var toggle = document.querySelector(".toggle");
var controle = 0;
toggle.addEventListener("click", function(){
    var nav = document.querySelector(".flex-nav");
    var menu = document.querySelector(".menu");
    if(controle == 0){
        menu.classList.add("change-order");
        nav.classList.add("column-direction"); 
        controle++
    }else{
        nav.classList.remove("column-direction");
        menu.classList.remove("change-order");
        controle--
    }
});