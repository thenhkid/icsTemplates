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

			// FREEWALL
			/* set up freewall
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
			*/

			//SHAPESHIFT
			$("#dashboard-shapeshift").shapeshift(
				{
					minColumns: 3,
					columns:null
				}
			);

			// on side panel show and hide, readjust the freewall
			$(document).on('show.ics.sidepanel hide.ics.sidepanel', function () {
				$("#dashboard-shapeshift").trigger("ss-rearrange")
			});


			var currentSystolic = 141;
			var currentDiastolic = 75;

			var systolicMap = [
				[0,0],
				[120 , 16],
				[130 , 33],
				[140 , 50],
				[160 , 67],
				[180 , 84],
				[200 , 101]
			]

			var distolicMap = [
				[0,0],
				[80 , 16],
				[85 , 33],
				[90 , 50],
				[100 , 67],
				[110 , 84],
				[120 , 101]
			]

			// position dot from bottom
			for (var i = 0; i < systolicMap.length; i++) {

				if (currentSystolic > systolicMap[i][0]) {
					// find the closest value
					var diff = currentSystolic - systolicMap[i][0];
					var diffTwo = currentSystolic - systolicMap[i+1][0];
					var steps = systolicMap[i+1][0] - systolicMap[i][0];
					var percentageOffset = 17 / steps;

					// once the systolic value is greater than or equal to the start of the next value range, position the dot.
					if (diffTwo < 0 || diffTwo == 0 )
					{
						$('.dot').css('bottom', systolicMap[i][1] + (percentageOffset * diff) + '%');
					}
				}
			}

			// position dot from left
			for (var i = 0; i < distolicMap.length; i++) {

				if (currentDiastolic > distolicMap[i][0]) {
					// find the closest value
					var diff = currentDiastolic - distolicMap[i][0];
					var diffTwo = currentDiastolic - distolicMap[i+1][0];
					var steps = distolicMap[i+1][0] - distolicMap[i][0];
					var percentageOffset = 17 / steps;

					if (diffTwo < 0 || diffTwo == 0 )
					{
						$('.dot').css('left', distolicMap[i][1] + (percentageOffset * diff) + '%');
					}
				}
			}
		}
	};

	return pageScripts;

});