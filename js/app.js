var common = {
	init: function() {
		common.owl();
		common.main();
	},
	owl: function() {

		$('.review-slider').owlCarousel({
			loop:true,
			items: 1,
			nav: true
		})
		

  	},
	main: function() {

		$('.phone-mask').mask("+8(999) 999-9999");

		$('.callback-btn').click(function(e){
			e.preventDefault()
			$('#needHelpPopup').addClass('active');
			$('header').removeClass('open');
		})
		$('.nav-trigger').click(function(){
			$('header').toggleClass('open');
		})
		$('.popup-close').click(function(){
			$('.popup-wrapper').removeClass('active');
		})

	}
};

(function() {
	common.init();
}());
