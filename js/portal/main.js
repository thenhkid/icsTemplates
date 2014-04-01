require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'jquery' : '../vendor/jquery-1.10.1.min',
		'bootstrap' : '../vendor/bootstrap.min',
	},
	shim: {
		'bootstrap': ['jquery'],
	}
});

require(['jquery', 'templating', 'bootstrap'], function ($, templating) {

});


