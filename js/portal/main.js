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

// run page scripts
var pageId = $('body').attr('id');
if (typeof PageScripts[pageId] === 'function')
{
	PageScripts[pageId]();
}

});


