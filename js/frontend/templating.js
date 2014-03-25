define(['jquery'], function ($) {

	$.ajaxSetup ({
		// Disable caching of AJAX responses
		cache: false
	});

	var queryString = function () {
		// This function is anonymous, is executed immediately and 
		// the return value is assigned to QueryString!
		var query_string = {};
		var query = window.location.search.substring(1);
		var vars = query.split("&");

		for (var i=0;i<vars.length;i++)
		{
			var pair = vars[i].split("=");
			// If first entry with this name
			if (typeof query_string[pair[0]] === "undefined") {
				query_string[pair[0]] = pair[1];
				// If second entry with this name
			} else if (typeof query_string[pair[0]] === "string") {
				var arr = [ query_string[pair[0]], pair[1] ];
				query_string[pair[0]] = arr;
				// If third or later entry with this name
			} else {
				query_string[pair[0]].push(pair[1]);
			}
		}

		return query_string;

	} ();

	var templating = function(){};

	var getActiveNav = function (page) {

		activeNav = null;

		if (/^organizations/.test(page)) {
			activeNav = 0;
		}
		else if (/^configurations/.test(page)) {
			activeNav = 1;
		}
		return activeNav;
	}

	/*
	var config = {
		'configurations' : {
			activeNav : 1
		},
		'configurations-choose-fields' : {
			activeNav : 1
		},
		'configurations-details' : {
			activeNav : 1
		},
		'configurations-edit-details' : {
			activeNav : 1
		},
		'configurations-connections' : {
			activeNav : 1
		},
		'configurations-data-translations' : {
			activeNav : 1
		},
		'configurations-scheduling' : {
			activeNav : 1
		},
		'organizations' : {
			activeNav : 0
		},
		'organizations-details' : {
			activeNav : 0
		},
		'organizations-details-edit' : {
			activeNav : 0
		},
		'organizations-configurations' : {
			activeNav : 0
		},
		'organizations-providers' : {
			activeNav : 0
		}
	}
	*/

	var nav = $('.primary-nav');

	templating.prototype.getContent = function (location)
	{
		if ($('#template-container').length)
		{
			return $('#template-container').load(location + '.tpl');
		}
	}

	templating.prototype.init = function()
	{
		var page = queryString.page;
		if (typeof page !== 'undefined')
		{
			this.getContent(queryString.page);

			// remove active nav class on navbar
			$('li.active', nav).removeClass('active');

			// template container after the header
			$('#header').after('<div class="template-container"></div>');

			activeNav = getActiveNav(queryString.page);

			// add active class to activeNav index from config.
			if(activeNav !== null)
			{
				$('li:eq('+ activeNav +')', nav).addClass('active');
			}

		}
	}

	return templating;

})

