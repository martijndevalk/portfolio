'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.agecheck = undefined;

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var agecheck = exports.agecheck = function agecheck() {

    var $agecheck = $('.agecheck'),
        cookielaw = _jsCookie2.default.get('cookielaw');

    if (cookielaw == 'accepted') {
        $agecheck.remove();
        $('body').removeClass('agecheck-is-open');
        $('body').addClass('agecheck-is-closed');
    } else {
        $agecheck.show();

        $agecheck.on('click', '#confirm', function () {
            $('body').removeClass('agecheck-is-open');
            $('body').addClass('agecheck-is-closed');
            _jsCookie2.default.set('cookielaw', 'accepted', { expires: 365 });
        });
    }

    $('.show-agecheck-back').on('click', function (e) {
        $agecheck.addClass('back-visible');
        $agecheck.removeClass('front-visible');
        e.preventDefault();
    });

    $('.show-agecheck-front').on('click', function (e) {
        $agecheck.removeClass('back-visible');
        $agecheck.addClass('front-visible');
        e.preventDefault();
    });
};