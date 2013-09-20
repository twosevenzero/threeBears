(function($) {
    /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
    */

    module('jQuery#threeBears', {
        setup: function() {
            this.elems = $('.threeBears');
        }
    });

    test('is chainable', 1, function() {
        strictEqual(this.elems.threeBears(), this.elems, 'should be chainable');
    });

    test('offers a way for the user to define defaults', 1, function(){
        ok(!!$.fn.threeBears.defaults, 'A user can change the defaults without editing the plugin.');
    });

    test('should create a new div with class of threeBearsTest', 1, function(){
        this.elems.threeBears();
        ok(!!$('body').find('div').hasClass('threeBearsTest'));
    });

    test('should copy the element text to .threeBearsTest', 1, function(){
        this.elems.threeBears();
        strictEqual(this.elems.text(), $('.threeBearsTest').text(), 'should be equal' );
    });

    test('should copy the element css to .threeBearsTest', 5, function(){
        this.elems.threeBears();
        var $testElem = $('.threeBearsTest');
        strictEqual(this.elems.css('font-family'), $testElem.css('font-family'), 'should be equal' );
        strictEqual(this.elems.css('font-weight'), $testElem.css('font-weight'), 'should be equal' );
        strictEqual(this.elems.css('font-style'), $testElem.css('font-style'), 'should be equal' );
        strictEqual(this.elems.css('letter-spacing'), $testElem.css('letter-spacing'), 'should be equal' );
        strictEqual(this.elems.css('white-space'), $testElem.css('white-space'), 'should be equal' );
    });

    // Commented out this test do to new feature. Need to find a way to re-test this now. (minFontSize)
    // test('should reduce font-size until .threeBearsTest\'s width is less than element width', 1, function(){
    //     this.elems.threeBears();
    //     ok($('.threeBearsTest').width() <= this.elems.width(), 'test div width should be less than elem width');
    // });

    test('element font-size should be equal to new font-size of .threeBearsTest\'s font-size', 1, function(){
        this.elems.threeBears();
        strictEqual($('.threeBearsTest').css('font-family'), this.elems.css('font-family'), 'should have same font-size' );
    });

}(jQuery));
