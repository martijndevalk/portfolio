export const sectionAnimations = () => {

    var sec1Tl = new TimelineMax(),
        sec2Tl = new TimelineMax(),
        sec3Tl = new TimelineMax(),
        sec4Tl = new TimelineMax(),
        sec5Tl = new TimelineMax();

    // init controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
//            duration: $('section').height(),
            triggerHook: 0
        }
    });



    // build scenes


    // Section-1
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '#home'
    })
    .setClassToggle('a.section-1', 'active')
    .addTo(controller);

    var parallaxSection1Tl = new TimelineMax();
    parallaxSection1Tl
        .to('.section-1 .logo-banner', 2, {y: '-300%', autoAlpha: 0, ease:Power0.easeNone}, 0);

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-1 .container',
        triggerHook: 'onLeave'
    })
        .setTween(parallaxSection1Tl)
        .addTo(controller);


    // Section-2
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '#historie'
    })
    .setClassToggle('a.section-2', 'active')
    .addTo(controller);

    var parallaxFromSection2Tl  = new TimelineMax(),
        parallaxToSection2Tl    = new TimelineMax();

    parallaxFromSection2Tl
        .from('.section-2 .container__text', 2, {y: '75%', autoAlpha: 0, ease:Power0.easeNone}, 0)
        .from('.section-2 .container__visual', 2, {y: '75%', autoAlpha: 0, ease:Power0.easeNone}, 0);

    parallaxToSection2Tl
        .to('.section-2 .container__text', 2, {y: '-75%', autoAlpha: 0, ease:Power0.easeNone}, 0)
        .to('.section-2 .container__visual', 2, {y: '-75%', autoAlpha: 0, ease:Power0.easeNone}, 0);

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-1 .container',
        triggerHook: 'onLeave'
    })
    .setTween(parallaxFromSection2Tl)
    .addTo(controller);

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-2 .container',
        triggerHook: 'onLeave'
    })
        .setTween(parallaxToSection2Tl)
        .addTo(controller);





    // Section-3
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '#duurzaamheid'
    })
    .setClassToggle('a.section-3', 'active')
    .addTo(controller);

    var parallaxFromSection3Tl  = new TimelineMax(),
        parallaxToSection3Tl    = new TimelineMax();

    parallaxFromSection3Tl
        .from('.section-3 .container__text', 2, {y: '50%', autoAlpha: 0, ease:Power0.easeNone}, 0);

    parallaxToSection3Tl
        .to('.section-3 .container__text', 2, {y: '-50%', autoAlpha: 0, ease:Power0.easeNone}, 0);

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-2 .container',
        triggerHook: 'onLeave'
    })
        .setTween(parallaxFromSection3Tl)
        .addTo(controller);

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-3 .container',
        triggerHook: 'onLeave'
    })
        .setTween(parallaxToSection3Tl)
        .addTo(controller);





    // Section-4
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '#arsenal'
    })
    .setClassToggle('a.section-4', 'active')
    .addTo(controller);


    var parallaxFromSection4Tl  = new TimelineMax(),
        parallaxToSection4Tl    = new TimelineMax();

    parallaxFromSection4Tl
        .from('.section-4 .container__text', 2, {y: '50%', autoAlpha: 0, ease:Power0.easeNone}, 0);

    parallaxToSection4Tl
        .to('.section-4 .container__text', 2, {y: '-50%', autoAlpha: 0, ease:Power0.easeNone}, 0);

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-3 .container',
        triggerHook: 'onLeave'
    })
        .setTween(parallaxFromSection4Tl)
        .addTo(controller);

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-4 .container',
        triggerHook: 'onLeave'
    })
        .setTween(parallaxToSection4Tl)
        .addTo(controller);


    // Section-5

    var showWineBrands = new TimelineMax(),
        hideWineBrands = new TimelineMax();

    showWineBrands
        .staggerTo('.wine-brands li', 0.4, {autoAlpha: 1, ease: Linear.easeNone}, 0.1);

    hideWineBrands
        .staggerTo('.wine-brands li', 0.4, {autoAlpha: 0, ease: Linear.easeNone}, 0.1);

    new ScrollMagic.Scene({
        duration: $('#merken').height(),
        triggerElement: '#merken'
    })
        .setClassToggle('a.section-5', 'active')
        .setPin('.wine-brands')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '#merken'
    })
        .setTween(showWineBrands)
        .addTo(controller);


    new ScrollMagic.Scene({
        triggerElement: '.section-6 .container',
        triggerHook: 'onEnter',
        offset: -$('.section-6 .container').height()
    })
        .setTween(hideWineBrands)
        .addTo(controller);

    // 5a
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-5a',
        triggerHook: 'onEnter'
    })
        .setClassToggle('.wine-1, .section-5a .section-panel', 'is-active')
        .addTo(controller);

    // 5b
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-5b',
        triggerHook: 'onEnter'
    })
        .setClassToggle('.wine-2, .section-5b .section-panel', 'is-active')
        .addTo(controller);


    // 5c
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-5c',
        triggerHook: 'onEnter'
    })
        .setClassToggle('.wine-3, .section-5c .section-panel', 'is-active')
        .addTo(controller);


    // 5d
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.section-5d',
        triggerHook: 'onEnter'
    })
        .setClassToggle('.wine-4, .section-5d .section-panel', 'is-active')
        .addTo(controller);


    // Section-6
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '#nieuws'
    })
        .setClassToggle('a.section-6', 'active')
        .addTo(controller);


    var parallaxSection6Tl = new TimelineMax();

    parallaxSection6Tl
        .from('.section-6 .container__text', 2, {y: '50%', autoAlpha: 0, ease:Power0.easeNone}, 0);

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '#wine-casa-real',
        triggerHook: 'onLeave',
        offset: $('.section-5d .container').height()
    })
        .setTween(parallaxSection6Tl)
//        .addIndicators()
        .addTo(controller);


    // Scrollto
    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 0.6, {scrollTo: { y: newpos }, ease:Power1.easeNone});
    });

    $(document).on('click', 'a[href^="#"]', function (e) {

        var id = $(this).attr('href');

        if ($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            controller.scrollTo(id);

            // if supported by the browser we can even update the URL.
            if (window.history && window.history.pushState) {
                history.pushState('', document.title, id);
            }
        }
    });



    // Navigation


    $('.main-nav a').each(function(){

        var navButtonTl = new TimelineMax();

        navButtonTl.pause()
            .fromTo($(this).find('.line'), 0.3, { width: '0%', autoAlpha: 0 }, {width: '100%', autoAlpha: 1, ease:Power1.easeOut});

        $(this).hover(
            function() {
                navButtonTl.play();
            }, function() {
                navButtonTl.reverse(0);
            }
        );

    });

};
