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
		// off-canvas-menu
		$('.menu-triger').on('click', function(){
			$('.off-canvas-menu, .off-canvas-overlay').addClass('active');
			return false;
		});
		$('.menu-close').on('click', function(){
			$('.off-canvas-menu, .off-canvas-overlay').removeClass('active');
		});
		$('.off-canvas-overlay').on('click', function(){
			$('.off-canvas-menu, .off-canvas-overlay').removeClass('active');
		});

	});
})(jQuery)