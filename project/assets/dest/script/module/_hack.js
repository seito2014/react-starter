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