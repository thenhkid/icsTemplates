require.config({
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'jquery' : '../vendor/jquery-1.10.1.min',
		'bootstrap' : '../vendor/bootstrap.min',
		'templating' : 'templating',
	},
	shim: {
		'bootstrap': ['jquery'],
	}
});

require(['jquery', 'templating', 'page-scripts', 'bootstrap'], function ($, Templating, PageScripts) {

	var pageId = $('body').attr('id');
	var templatingEngine = new Templating();
	templatingEngine.init();

	var fixPagePadding = function () {

		var header = $('.header');
		var headerHeight = $('.header').outerHeight();
		var elmAfterHeader = $('.header').next();
		var elmAfterHeaderPadding = parseInt(elmAfterHeader.css('padding-top'));

		// move the page down so the fixed header isn't in the way.
		// this has been defined in css as well
		if(header.css('position') === 'fixed' && elmAfterHeaderPadding !== headerHeight)
		{
			header.next().css('padding-top', headerHeight);
		}
	};

	var windowResizeHandler = function () {
		fixPagePadding();
	};

	$("[data-toggle=popover]").popover();

	// close other popovers in app feature list
	$(".app-feature-table [data-toggle=popover]").on('click', function() {
		$(".app-feature-table [data-toggle=popover]").not(this).popover('hide');
	});

	// close other popovers on click off
	$('body').on('click', function (e) {
		//only buttons
		if ($(e.target).data('toggle') !== 'popover'
			&& $(e.target).parents('.popover.in').length === 0) { 
			$('[data-toggle="popover"]').popover('hide');
		}
	});

	// page scripts
	if (typeof PageScripts[pageId] === 'function')
	{
		PageScripts[pageId]();
	}

	fixPagePadding();

	$(window).on('resize', windowResizeHandler);
});


