'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = smoothScroll;
function smoothScroll() {

    'use strict';

    var HEADER_HEIGHT = 0;

    var $document = $(document);

    var mStopOn = function mStopOn() {
        $document.on('DOMMouseScroll', preventDefault);
        $document.on('mousewheel', preventDefault);
    };

    var mStopOff = function mStopOff() {
        $document.off('DOMMouseScroll', preventDefault);
        $document.off('mousewheel', preventDefault);
    };

    var preventDefault = function preventDefault(event) {
        event.preventDefault();
    };

    $('a.js-scroll').on('click', function (event) {
        event.preventDefault();

        if (!$(this).hasClass('nolink')) {
            var id = $(this).attr('href'),
                target = $(id).offset().top;
            mStopOn();
            $('html, body').animate({ scrollTop: target - HEADER_HEIGHT }, 500, mStopOff);
        }
    });
}