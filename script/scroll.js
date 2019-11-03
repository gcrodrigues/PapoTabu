/*$("#opcao1").click(function() {
    $("#Scroll").animate({scrollTop: $("#id da classe").offset().top - 50}, 1000);
})*/
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2500);
    });
});

