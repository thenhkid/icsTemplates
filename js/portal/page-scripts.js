define(['jquery', 'date-display', 'date-display'], function ($) {

	var pageScripts = {
		dashboard : function () {
			$(".date-picker-dashboard").dateDisplay();
		}
	}

	return pageScripts;

});