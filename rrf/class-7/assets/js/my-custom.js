(function($){
	jQuery(document).ready(function($){
		$(".staff-list").owlCarousel({
			items: 4,
			autoplay: false,
			margin: 30,
			loop: true,
			nav: true, 
			navText: ["<i class='fa fa-long-arrow-alt-left'></i>", "<i class='fa fa-long-arrow-alt-right'></i>"]
		});
	});
})(jQuery)