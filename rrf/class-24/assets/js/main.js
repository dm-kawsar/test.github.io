(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		$('.search-trigger').on('click', function() {
			$('.search-box, .off-canvas-overlay').addClass('active');
		});

		$('.close-btn').on('click', function () {
			$('.search-box, .off-canvas-overlay').removeClass('active');
		});

		$('.off-canvas-overlay').on('click', function () {
			$('.off-canvas-overlay, .search-box').removeClass('active');
		});     


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	