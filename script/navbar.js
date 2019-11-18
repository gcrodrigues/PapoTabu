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
    if(controle == 0){
        var insta = document.querySelector("#insta");
        insta.style.order= 1;
        nav.classList.add("column-direction");
        
        controle++
    }else{
        nav.classList.remove("column-direction");
        controle--
    }
    console.log(controle);
    
});