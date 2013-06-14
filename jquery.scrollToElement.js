(function($, undefined) {
    $.fn.scrollToElement = function(element, options) {

        var settings = $.extend({
            scrollSpeed: 400,
            offsetChange: 0
        }, options);

        return this.each(function() {
            var finalScrollTop;
            var $this = $(this);

            if (typeof element === "number") {
                finalScrollTop = element;
            } else if (typeof element === "string") {
                finalScrollTop = $(element).offset().top + settings.offsetChange;
            } else {
              throw new TypeError("input must be a string or number");
            }

            $this.click(function() {
                $('body,html').animate({ 
                    scrollTop: finalScrollTop
                }, settings.scrollSpeed);
                return false;
            });
        });
    };
})(jQuery);