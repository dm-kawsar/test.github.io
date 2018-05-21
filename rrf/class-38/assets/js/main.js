(function ($) {
	"use strict";

    jQuery(document).ready(function($){

			$('.hompage-slids').owlCarousel({
				items: 1,
				autoplay: false,
				dots: true,
				nav: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				loop: true,
				animateOut: 'fadeOut'
			});

    });


    jQuery(window).load(function(){



    });


}(jQuery));
