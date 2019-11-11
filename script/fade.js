$(window).scroll(function(){
    $(".fadeout").css("opacity", 1 - $(window).scrollTop() / 550);
});