$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed:500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});


$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});