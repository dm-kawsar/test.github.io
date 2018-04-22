(function($){
	jQuery(document).ready(function($){
		// mesonary-effect
		$('.product-list').masonry(
			
		);

		// owl-carousel
		$(".home-page-slids").owlCarousel({
			items: 1,
			autoplay: false,
			margin: 30,
			loop: true,
			dots: false,
			nav: true, 
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
		});
		// owl-carousel
		$(".product-promotion").owlCarousel({
			items: 1,
			autoplay: false,
			margin: 30,
			loop: true,
			dots: true,
			nav: false, 
		});

	});
})(jQuery)