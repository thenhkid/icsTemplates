define(['jquery', 'central-graphic'], function ($, CentralGraphic) {

	var pageScripts = {
		home : function () {
			CentralGraphic.init();
		}
	}

	return pageScripts;

});