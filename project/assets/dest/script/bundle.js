(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _hack = require('./module/_hack.js');

var _hack2 = _interopRequireDefault(_hack);

var _smoothScroll = require('./module/_smooth-scroll.js');

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hack2.default)();

(0, _smoothScroll2.default)();

// import sampleComponent from './jsx/button/_button.js';
// sampleComponent();
},{"./module/_hack.js":2,"./module/_smooth-scroll.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hack;
function hack() {

    'use strict';

    //htmlタグを変数に

    var htmlTag = document.documentElement;

    //userAgentを変数に
    var userAgent = window.navigator.userAgent.toLowerCase();

    //OS,ブラウザを変数に
    var osList = ['windows'];

    //スペースを定数に
    var SPACE = ' ';

    //OSを判定してhtmlタグにクラスをつける
    for (var i = 0, len = osList.length; i < len; i += 1) {

        if (userAgent.indexOf(osList[i]) !== -1) {
            htmlTag.className += SPACE + osList[i];

            break;
        }
    }
}
},{}],3:[function(require,module,exports){
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
},{}]},{},[1]);
