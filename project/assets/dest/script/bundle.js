(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _hack = require('./module/_hack.jsx');

var _hack2 = _interopRequireDefault(_hack);

var _smoothScroll = require('./module/_smooth-scroll.jsx');

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

var _button = require('./module/_button.jsx');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hack2.default)();

(0, _smoothScroll2.default)();

(0, _button2.default)();


},{"./module/_button.jsx":2,"./module/_hack.jsx":3,"./module/_smooth-scroll.jsx":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = button;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function button() {

    'use strict';

    // class SampleComponent extends React.Component {
    //   render() {
    //     return (
    //       <div>
    //         This article is written by leader22
    //       </div>
    //     );
    //   }
    // }

    // const $sample = document.getElementById('js-sample');

    // ReactDOM.render(<Button text="button" onClick="{this.setClass}" />, $sample);

    var Button = function (_React$Component) {
        _inherits(Button, _React$Component);

        function Button(pops) {
            _classCallCheck(this, Button);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, pops));

            _this.setClass();
            return _this;
        }

        _createClass(Button, [{
            key: 'setClass',
            value: function setClass() {
                this.className += ' is-active';
            }
        }, {
            key: 'render',
            value: function render() {
                var text = this.props.text;


                return React.createElement(
                    'button',
                    { className: 'button' },
                    text
                );
            }
        }]);

        return Button;
    }(React.Component);

    var $sample = document.getElementById('js-sample');

    ReactDOM.render(React.createElement(Button, { text: 'button', onClick: '{this.setClass}' }), $sample);
}


},{}],3:[function(require,module,exports){
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


},{}],4:[function(require,module,exports){
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
