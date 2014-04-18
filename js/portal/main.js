require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'jquery' : '../vendor/jquery-1.10.1.min',
		'bootstrap' : '../vendor/bootstrap.min',
		'moment' : '../vendor/moment',
		'daterangepicker' : '../vendor/daterangepicker',
		//'freewall' : '../vendor/freewall',
		'shapeshift' : '../vendor/jquery.shapeshift',
		'touchpunch' : '../vendor/jquery.touch-punch.min',
		'jqueryui' : '../vendor/jquery-ui-1.10.4.min'
	},
	shim: {
		'bootstrap': ['jquery'],
		'freewall': ['jquery'],
		'shapeshift': ['jquery', 'touchpunch', 'jqueryui'],
		'touchpunch' : ['jquery']
	}
});

require(['jquery', 'page-scripts', 'bootstrap', 'shapeshift'], function ($, PageScripts) {

// run page scripts
var pageId = $('body').attr('id');
if (typeof PageScripts[pageId] === 'function')
{
	PageScripts[pageId]();
}

});


