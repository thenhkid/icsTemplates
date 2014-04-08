define(['jquery', 'date-display', 'date-display', 'side-panel'], function ($) {

	var pageScripts = {
		dashboard : function () {
			$(".date-picker-dashboard").dateDisplay();
			$(".side-panel").sidePanel({
				closeBtnSelector: '.close-side-panel'
			});

			// adjust favorite foors height //
			var favoriteFoodsPanel = $('.panel-favorite-foods');
			var favortieFoodsScrollPanel = favoriteFoodsPanel.find('.scroll-panel');
			var favoriteFoodsPanelBody = favoriteFoodsPanel.find('.panel-body');
			favortieFoodsScrollPanel.height(favoriteFoodsPanelBody.outerHeight())

			// set up freewall
			var wall = new freewall("#dashboard-freewall");
				wall.reset({
				selector: '.item',
				animate: true,
				cellW: 320,
				cellH: 'auto',
				onResize: function() {
					wall.fitWidth();
				}
			});
			wall.fitWidth();

			// on side panel show and hide, readjust the freewall
			$(document).on('show.ics.sidepanel hide.ics.sidepanel', function () {
				wall.fitWidth();
			});
		}
	};

	return pageScripts;

});