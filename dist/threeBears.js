/*! jQuery threeBears - v0.1.2 - 2013-10-07
* https://github.com/twosevenzero/threeBears
* Copyright (c) 2013 Dave West; Licensed MIT */
(function($) {

    var threeBears = {

        init: function(elem, config) {
            this.$elem  = $(elem);
            this.config = $.extend({}, $.fn.threeBears.defaults, config);
            this.elemText = this.$elem.text();
            this.elemWidth = this.$elem.width();

            this.createDiv();
            this.copyText();
            this.copyCSS();
            this.reduceFontSize();
            this.updateElemFontSize();
        },

        createDiv: function() {
            if ( $('div.threeBearsTest').length === 0 ){
                $('<div class="threeBearsTest">').css({
                    'position': 'absolute',
                    'top': '-99999px',
                    'left': '-99999px',
                    'display': 'inline'
                }).appendTo('body');
            }
        },

        copyText: function() {
            $('div.threeBearsTest').text(this.elemText);
        },

        copyCSS: function() {
            $('div.threeBearsTest').css({
                'font-family': this.$elem.css('font-family'),
                'font-size': this.$elem.css('font-size'),
                'font-weight': this.$elem.css('font-weight'),
                'font-style': this.$elem.css('font-style'),
                'letter-spacing': this.$elem.css('letter-spacing'),
                'white-space': this.$elem.css('white-space')
            });
        },

        reduceFontSize: function() {
            var testDiv = $('div.threeBearsTest'),
                testDivWidth = testDiv.width(),
                testDivFontSize = parseInt(testDiv.css('font-size'), 10);

            if ( testDivFontSize > this.config.maxFontSize ) {
                testDivFontSize = this.config.maxFontSize + 1;
            }

            while ( testDivWidth >= this.elemWidth ) {
                if ( testDivFontSize === this.config.minFontSize ) {
                    break; 
                }
                testDivFontSize = testDivFontSize - 1;
                $('div.threeBearsTest').css('font-size', testDivFontSize);
                testDivWidth = testDiv.width();
            }

            this.newFontSize = testDivFontSize;
        },

        updateElemFontSize: function() {
            return this.$elem.css('font-size', this.newFontSize);
        }

    };


    $.fn.threeBears = function(config) {
        var plugin = new Object(threeBears);
        return this.each(function() {
            plugin.init(this, config);
        });
    };

    $.fn.threeBears.defaults = {
        minFontSize: 10,
        maxFontSize: 30
    };


}(jQuery));
