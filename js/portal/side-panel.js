define(['jquery'], function ($) {

	var SidePanel = function (element, options)
	{
		this.$element = $(element);
		this.options = options;
		this.transitioning = null;
	};

	SidePanel.DEFAULTS = {
		closeBtnSelector : '.close-side-panel',
		mainContentAreaSelector : '.main'
	};

	SidePanel.prototype.show = function() {
		this.$element.addClass("in");
		this.$element.css('display', 'block');

		console.dir($(this.mainContentAreaSelector));
		if ($(this.options.mainContentAreaSelector).hasClass('full-width')) {
			$(this.options.mainContentAreaSelector).removeClass('full-width');
		}

		var startEvent = $.Event('show.ics.sidepanel')
		this.$element.trigger(startEvent)
		if (startEvent.isDefaultPrevented()) return

		$(this.options.closeBtnSelector).on('click', $.proxy(this.hide, this));
		return false;
	};

	SidePanel.prototype.hide = function() {
		this.$element.removeClass("in");
		this.$element.css('display', 'none');
		$(this.options.mainContentAreaSelector).addClass('full-width');

		var startEvent = $.Event('hide.ics.sidepanel')
		this.$element.trigger(startEvent)
		if (startEvent.isDefaultPrevented()) return

		return false;
	};

	SidePanel.prototype.toggle = function () {
		this[this.$element.hasClass('in') ? 'hide' : 'show']();
	};

	var old = $.fn.sidePanel;

	$.fn.sidePanel = function (option) {
		return this.each(function () {
			var $this   = $(this);
			var data    = $this.data('ics.SidePanel');
			var options = $.extend({}, SidePanel.DEFAULTS, $this.data(), typeof option === 'object' && option);

			if (!data) {
				$this.data('ics.SidePanel', (data = new SidePanel(this, options)));
			}

			if (typeof option === 'string') {
				data[option]();
			}
		});
	};

	$.fn.sidePanel.Constructor = SidePanel;

	$(document).on('click.ics.SidePanel.data-api', '[data-toggle=sidepanel]', function (e) {
		var $this   = $(this), href;
		var target  = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');  //strip for ie7
		var $target = $(target);
		var data    = $target.data('ics.SidePanel');
		var option  = data ? 'toggle' : $this.data();

		if (!data || !data.transitioning) {
			$this[$target.hasClass('in') ? 'addClass' : 'removeClass']('closed');
		}

		$target.sidePanel(option);
	});
});