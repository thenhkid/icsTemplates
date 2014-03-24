require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'jquery' : '../vendor/jquery-1.10.1.min',
		'bootstrap' : '../vendor/bootstrap.min',
		'templating' : 'templating'
	},
	shim: {
		'bootstrap': ['jquery'],
	}
});

require(['jquery', 'templating', 'bootstrap'], function ($, templating) {

	var templatingEngine = new templating();
	templatingEngine.init();

});


