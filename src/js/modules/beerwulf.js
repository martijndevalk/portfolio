import TweenMax  from '../../js/vendor/gsap/src/uncompressed/TweenMax';
import TimelineMax  from '../../js/vendor/gsap/src/uncompressed/TimelineMax';
import MorphSVGPlugin from '../../js/vendor/gsap/src/uncompressed/plugins/MorphSVGPlugin';
import DrawSVGPlugin from '../../js/vendor/gsap/src/uncompressed/plugins/DrawSVGPlugin';

export const beerwulfAnim = () => {

  TweenMax.set($(".beerwulf-anim .svg"), { visibility: 'visible'});

  const tlBubbleGroup1 = new TimelineMax();
  const tlBubbleGroup2 = new TimelineMax();
  const tlBubbleGroup3 = new TimelineMax();
  const tlBubbleGroup4 = new TimelineMax();
  const tlBubbleGroup5 = new TimelineMax();
  const tlBubbleGroup6 = new TimelineMax();
  const tlBubbleGroup7 = new TimelineMax();
  const tlBubbleGroup8 = new TimelineMax();
  const tlBubbleGroup9 = new TimelineMax();

  tlBubbleGroup1.staggerTo('#bubbleGroup1 circle', 6, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.3);
  tlBubbleGroup2.staggerTo('#bubbleGroup2 circle', 7, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.6);
  tlBubbleGroup3.staggerTo('#bubbleGroup3 circle', 6, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.7);
  tlBubbleGroup4.staggerTo('#bubbleGroup4 circle', 8, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.4);
  tlBubbleGroup5.staggerTo('#bubbleGroup5 circle', 6, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.9);
  tlBubbleGroup6.staggerTo('#bubbleGroup6 circle', 5, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.4);
  tlBubbleGroup7.staggerTo('#bubbleGroup7 circle', 6, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.2);
  tlBubbleGroup8.staggerTo('#bubbleGroup8 circle', 7, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.8);
  tlBubbleGroup9.staggerTo('#bubbleGroup9 circle', 6, {attr: {cy: -50}, ease: Quad.easeInOut, repeat: -1 }, 0.5);

};
