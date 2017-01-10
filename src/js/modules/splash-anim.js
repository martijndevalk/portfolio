import TweenMax  from '../../js/vendor/gsap/src/uncompressed/TweenMax';
import TimelineMax  from '../../js/vendor/gsap/src/uncompressed/TimelineMax';
import MorphSVGPlugin from '../../js/vendor/gsap/src/uncompressed/plugins/MorphSVGPlugin';
import DrawSVGPlugin from '../../js/vendor/gsap/src/uncompressed/plugins/DrawSVGPlugin';

export const splashAnim = () => {

  TweenMax.set($(".splash-anim .svg"), { visibility: 'visible'});

  const tlBubbleGroup1 = new TimelineMax();
  const tlBubbleGroup2 = new TimelineMax();
  const tlBubbleGroup3 = new TimelineMax();
  const tlBubbleGroup4 = new TimelineMax();
  const tlBubbleGroup5 = new TimelineMax();

  tlBubbleGroup1.staggerTo('#bubbleGroup1 circle', 3, {attr: {cy: 200}, repeat: -1 }, 0.6);
  tlBubbleGroup2.staggerTo('#bubbleGroup2 circle', 3, {attr: {cy: 200}, repeat: -1 }, 0.6);
  tlBubbleGroup3.staggerTo('#bubbleGroup3 circle', 3, {attr: {cy: 200}, repeat: -1 }, 0.6);
  tlBubbleGroup4.staggerTo('#bubbleGroup4 circle', 3, {attr: {cy: 200}, repeat: -1 }, 0.6);
  tlBubbleGroup5.staggerTo('#bubbleGroup5 circle', 3, {attr: {cy: 200}, repeat: -1 }, 0.6);

    // TweenMax.set("#motionPathB", {opacity: 0.2});
    // TweenMax.set("#motionPathE", {opacity: 0.2});
    //
    // TweenMax.to("#motionPathB-rect1", 4.2, {bezier: {values: pathB, type: "cubic", autoRotate: true}, ease: Sine. easeOut, repeat: -1});
    //
    // TweenMax.to("#motionPathE-circle1", 4.2, {bezier: {values: pathE, type: "cubic", autoRotate: true}, ease: Sine. easeOut, repeat: -1});
    //
    // TweenMax.to("#motionPathC-rect", 4.2, {bezier: {values: pathC, type: "cubic", autoRotate: true}, ease: Sine. easeOut, repeat: -1});

};
