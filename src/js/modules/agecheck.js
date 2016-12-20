import Cookies from 'js-cookie';

export const agecheck = () => {

    const $agecheck     = $('.agecheck'),
          cookielaw     = Cookies.get('cookielaw');


    if ( cookielaw == 'accepted' ) {
        $agecheck.remove();
        $('body').removeClass('agecheck-is-open');
        $('body').addClass('agecheck-is-closed');
    } else {
        $agecheck.show();

        $agecheck.on('click', '#confirm', function () {
            $('body').removeClass('agecheck-is-open');
            $('body').addClass('agecheck-is-closed');
            Cookies.set('cookielaw', 'accepted', { expires: 365 });
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
