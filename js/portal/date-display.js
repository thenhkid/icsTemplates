define(['jquery'], function ($) {

	var DateDisplay = function (element, options)
	{
		this.element = $(element);
		this.options = options;
		this.nextDayButton = this.element.find('.next-day');
		this.prevDayButton = this.element.find('.prev-day');
		this.selectDayButton = this.element.find('.select-day');
		this.init();
	}

	DateDisplay.DEFAULTS = {
	}

	DateDisplay.prototype.init = function () {
		this.nextDayButton.on('click', this.navigteDay)
		this.prevDayButton.on('click', this.navigteDay)
		this.selectDayButton.on('click', this.selectDay)
	}

	DateDisplay.prototype.navigteDay = function(e) {
		e.preventDefault();
		alert('navigating day');
		return false;
	}

	DateDisplay.prototype.selectDay = function(e) {
		e.preventDefault();
		alert('selecting day');
		return false;
	}

	var old = $.fn.dateDisplay;

	$.fn.dateDisplay = function (option) {
		return this.each(function () {
			var $this   = $(this)
			var data    = $this.data('ics.DateDisplay')
			var options = $.extend({}, DateDisplay.DEFAULTS, $this.data(), typeof option == 'object' && option)

			if (!data) $this.data('ics.DateDisplay', (data = new DateDisplay(this, options)))
			if (typeof option == 'string') data[option]();
		})
	}

	$.fn.dateDisplay.Constructor = DateDisplay;
});