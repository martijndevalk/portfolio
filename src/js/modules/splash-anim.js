import TweenMax  from '../../js/vendor/gsap/src/uncompressed/TweenMax';
import MorphSVGPlugin from '../../js/vendor/gsap/src/uncompressed/plugins/MorphSVGPlugin';
import DrawSVGPlugin from '../../js/vendor/gsap/src/uncompressed/plugins/DrawSVGPlugin';

export const splashAnim = () => {

    var path = MorphSVGPlugin.pathDataToBezier("#motionPath");

    TweenMax.to("#circle", 5, {bezier:{values:path, type:"cubic"}, ease:Linear.easeNone, repeat:-1});

};
