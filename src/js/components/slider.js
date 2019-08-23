import { TweenMax, TimelineMax, Power4, Linear } from 'gsap/all'
import customEase from '../gsap-bonus/CustomEase'

class Slider {
  constructor (el) {
    this.el = el

    // slides
    this.slidesContainer = this.el.querySelector('[js-hook="slider-slides"]')
    this.slides = [...this.slidesContainer.querySelectorAll('[js-hook="slider-slide"]')]

    this.slidesTotal = this.slides.length
    this.current = 0

    this.allImages = [...this.slidesContainer.querySelectorAll('[js-hook=slider-img]')]
    this.activeImages = [...this.slides[this.current].querySelectorAll('[js-hook=slider-img]')]

    TweenMax.set(this.activeImages, { autoAlpha: 1 })

    // buttons
    this.buttons = {
      prev: this.el.querySelector('[js-hook="slider-button-prev"]'),
      next: this.el.querySelector('[js-hook="slider-button-next"]')
    }

    this.buttons.prev.setAttribute('disabled', true)

    this.initEvents()
  }

  initEvents () {
    this.buttons.prev.addEventListener('click', e => this.navigate('prev'))
    this.buttons.next.addEventListener('click', e => this.navigate('next'))
  }

  navigate (direction = 'next') {
    if (this.isAnimating) return
    this.isAnimating = true

    const currentSlide = this.slides[this.current]
    this.current = direction === 'next' ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 : this.current > 0 ? this.current - 1 : this.slidesTotal - 1
    const upcomingSlide = this.slides[this.current]

    const currentImages = [...currentSlide.querySelectorAll('[js-hook=slider-img]')]
    const upcomingImages = [...upcomingSlide.querySelectorAll('[js-hook=slider-img]')]

    this.tl = new TimelineMax({
      onComplete: () => {
        this.isAnimating = false
      }
    }).add('start').timeScale(1.2)

    this.tl
      .set(upcomingImages, { transformOrigin: direction === 'next' ? 'left center' : 'right center' })
      .set(currentImages, { transformOrigin: direction === 'next' ? 'right center' : 'left center' })
      .staggerFromTo(currentImages, 0.6, {
        scale: 1
      }, {
        scaleX: 3,
        autoAlpha: 0,
        ease: Power4.easeOut
      }, 0.2)
      .staggerFromTo(upcomingImages, 0.6, {
        scaleX: 3
      }, {
        autoAlpha: 1,
        scaleX: 1,
        ease: Power4.easeOut
      }, 0.2, '-=0.58')

    // disabled navigation
    if (this.current === this.slidesTotal - 1) {
      this.buttons.next.setAttribute('disabled', true)
    }

    if (this.current === 0) {
      this.buttons.prev.setAttribute('disabled', true)
    }

    if (direction === 'next' && this.current < this.slidesTotal) {
      this.buttons.prev.removeAttribute('disabled')
    }

    if (direction === 'prev' && this.current !== 0) {
      this.buttons.next.removeAttribute('disabled')
    }
  }
}

// init
const slider = new Slider(document.querySelector('[js-hook=slider]'))

export default slider
