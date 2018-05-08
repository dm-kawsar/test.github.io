	(function ($) {
		"use strict";

	    $(document).ready(function($){

				$(window).scroll(function(){
					if ($(this).scrollTop() > 200) {
						$('.scroll-btn').fadeIn();
					} else {
						$('.scroll-btn').fadeOut();
					}
				});

	    });

			$('.scroll-btn').on('click', function (e) {
				e.preventDefault();
				$('html, body').animate({scrollTop: 0}, 800);
			});



	}(jQuery));
