// Slider
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay:true,
        autoplayHoverPause: true,
        autoWidth: true,
        autoHeight: true,
        center: true,
        navText: ['<div class="prev"></div>','<div class="next"></div>']
    });
});