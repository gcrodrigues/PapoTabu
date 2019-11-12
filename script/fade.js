var nystories = document.querySelector(".main").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
        var opac = (window.pageYOffset / nystories);
        var titulo = document.querySelector(".elementos-flex");
        document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url('images/bgcapitulo.png') no-repeat";
        
        if($(window).scrollTop()>80){
            titulo.style.color = "black";
            titulo.style.transition = "color 1s"
        }else{
            titulo.style.color = "white";
            titulo.style.transition = "color 1s"
        }
    }
}