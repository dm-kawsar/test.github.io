(function ($) {

    jQuery(document).ready(function($){

			$('.project-title li').on('click', function() {

				$('.project-title li').removeClass('active');
				$(this).addClass('active');

				var selector = $(this).attr('data-filter');
				$('.project-list').isotope({
					filter: selector
				});
				
			});

    });


    jQuery(window).load(function(){
			$('.project-list').isotope();
    });


}(jQuery));
