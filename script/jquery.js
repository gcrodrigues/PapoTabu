$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },
        1500:{
            items:5
        }
    }
})