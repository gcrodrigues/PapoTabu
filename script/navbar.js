$(function() {
    $(".toggle").on("click", function() {
        if ($(".iten").hasClass("active")) {
            $(".iten").removeClass("active");
        } else {
            $(".iten").addClass("active");
        }
    });
});