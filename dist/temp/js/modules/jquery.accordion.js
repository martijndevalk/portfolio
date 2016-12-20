'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var accordion = exports.accordion = function accordion() {

    var allPanels = $('.accordion .dd').hide();

    $('.accordion > .container > div').on('click', function (e) {

        if (!$(this).hasClass('is-active')) {
            allPanels.slideUp('fast').parent();
            $(this).children('.dd').slideDown('fast');
            $(this).addClass('is-active').siblings().removeClass('is-active');
        }

        e.preventDefault();
    });
};