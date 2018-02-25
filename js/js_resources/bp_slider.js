$( document ).ready(function() {

	// slick settings
	$(".slider").slick({
	    autoplay: true,
	    autoplaySpeed: 6000,
	    draggable: true,
	    arrows: true,
	    dots: true,
	    fade: true,
	    speed: 2000,
	    infinite: true,
	    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	    touchThreshold: 100,
	    // prevArrow: $('.prev'),
	    // nextArrow: $('.next')
	});

});
