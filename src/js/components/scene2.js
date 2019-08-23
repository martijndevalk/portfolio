import randomBetween from '../helpers/random-between'
import randomColor from '../helpers/random-color'
import { TimelineMax, Linear, Power1 } from 'gsap/all'
import physics2D from '../gsap-bonus/Physics2DPlugin'
import drawSVG from '../gsap-bonus/DrawSVGPlugin'

const BUBBLES_CONTAINER = document.querySelector('[js-hook="bubbles-container"]')
const BUBBLES_GROUP = document.querySelector('[js-hook="bubbles-group"]')
const BUBBLES = [...BUBBLES_GROUP.querySelectorAll('circle')]
const COLORS = ['#06d6a0', '#118ab2', '#ef476f', '#ffd166', '#073b4c']
const SPARKLE_POP = document.querySelector('[js-hook="sparkle-pop"]')
const POP_GROUP = document.querySelector('[js-hook="pop-group"]')
const POP_CIRCLE = document.querySelector('[js-hook="pop-circle"]')
// const MOUSE = { x: 0, y: 0 }

class Scene {
  constructor () {
    // this.bubbles()
    this.initEvents()
  }

  initEvents () {
    document.addEventListener('click', (e) => {
      const mouseX = e.pageX
      const mouseY = e.pageY
      this.pop(mouseX, mouseY)
    })
  }

  bubbles () {
    const tlBubbles = new TimelineMax({
      repeat: -1,
      repeatDelay: 0.2
    })

    console.log(randomBetween(3, 9) / 5)

    tlBubbles.set(BUBBLES, {
      attr: {
        r: 4
      },
      x: 0,
      y: 0,
      scale: randomBetween(3, 9) / 2,
      transformOrigin: '50% 50%'
    })

    tlBubbles
      .staggerTo(BUBBLES, randomBetween(3, 9) / 5, {
        cycle: {
          fill: COLORS[(Math.random() * COLORS.length) | 0],
          physics2D: () => {
            return {
              velocity: randomBetween(200, 600),
              angle: randomBetween(-120, 20),
              gravity: 600
            }
          }
        },
        scale: 0
      })
  }

  pop (mouseX, mouseY) {
    // const pop = POP_GROUP.cloneNode(true)
    // BUBBLES_CONTAINER.appendChild(pop)

    const tlPop = new TimelineMax().timeScale(1.4)

    tlPop
      .set(SPARKLE_POP, {
        x: mouseX - SPARKLE_POP.getBoundingClientRect().width / 2,
        y: mouseY - SPARKLE_POP.getBoundingClientRect().height / 2
      })
      .set(POP_GROUP, {
        attr: {
          stroke: COLORS[(Math.random() * COLORS.length) | 0]
        }
      })
      .set(POP_CIRCLE, {
        transformOrigin: '50% 50%',
        attr: {
          stroke: COLORS[(Math.random() * COLORS.length) | 0]
        }
      })
      .fromTo(POP_GROUP.querySelectorAll('line'), 0.4, {
        drawSVG: '30% 30%'
      }, {
        drawSVG: '60% 80%',
        ease: Linear.easeNone
      })
      .to(POP_GROUP.querySelectorAll('line'), 1, {
        drawSVG: '100% 100%'
      })
      .fromTo(POP_CIRCLE, 1.2, {
        scale: 0,
        strokeWidth: '30%',
        attr: {
          r: 0
        }
      }, {
        scale: 1,
        strokeWidth: '0%',
        attr: {
          r: 15
        },
        ease: Power2.easeOut
      }, 0)
  }
}

// TweenMax.globalTimeScale(0.5)

// init
const scene = new Scene(BUBBLES_CONTAINER)

export default scene
