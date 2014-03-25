define(['jquery'], function ($) {

	var CentralGraphic = {

		windowWidth : $(window).width(),
		windowHeight : $(window).height(),
		windowObj : $(window),
		headerHeight : $('.header').outerHeight(),
		centralGraphicObj : $('.central-graphic'),
		mainContentObj : $('.content-container'),


		init: function () {
			if(this.centralGraphicObj.hasClass('auto-fit'))
			{
				var _self = this;
				this.setSize(this.windowHeight);
				this.setPosition();
				this.windowObj.on('resize', function () {
					_self.setSize();
					_self.headerHeight = $('.header').outerHeight();
					_self.setPosition();
				});

				$('.carousel').carousel({
					interval: 5000,
				});
			}
		},

		setSize : function (height) {
			//this.centralGraphicObj.outerHeight($(window).height());
			var carouselCentralGraphic = $('#carousel-central-graphic');
			var centralGraphicHeadingHeight = $('.central-graphic-heading').outerHeight();
			var centralGraphicActionHeight = $('.central-action-container').outerHeight();

			carouselCentralGraphic.height(this.centralGraphicObj.innerHeight() - (centralGraphicHeadingHeight + centralGraphicActionHeight) - this.headerHeight);
			$('.slide-image').height(carouselCentralGraphic.height() - $('.slide-image-caption').outerHeight())
		},

		setPosition : function ()
		{
			//$('.central-graphic').css('margin-top', $('.header').height() * -1);
			 $(this.mainContentObj).css('margin-top', this.centralGraphicObj.outerHeight());
		}
	};

	return CentralGraphic;
});