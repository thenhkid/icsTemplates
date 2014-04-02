require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'jquery' : '../vendor/jquery-1.10.1.min',
		'bootstrap' : '../vendor/bootstrap.min',
		'moment' : '../vendor/moment',
		'daterangepicker' : '../vendor/daterangepicker',
		'freewall' : '../vendor/freewall'
	},
	shim: {
		'bootstrap': ['jquery'],
		'freewall': ['jquery']
	}
});

require(['jquery', 'page-scripts', 'bootstrap', 'freewall'], function ($, PageScripts) {

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

// run page scripts
var pageId = $('body').attr('id');
if (typeof PageScripts[pageId] === 'function')
{
	PageScripts[pageId]();
}

});


