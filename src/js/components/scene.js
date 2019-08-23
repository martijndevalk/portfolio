import randomBetween from '../helpers/random-between'
import randomColor from '../helpers/random-color'
import { prefetchAssets } from '../helpers/prefetch-assets'

console.log(randomBetween(10, 30))
console.log(randomColor.toString(0.5))

const ASSETS = [...document.querySelectorAll('[data-prefetch]')]
const VIDEO_CONTAINER = document.querySelector('[js-hook="video-container"]')

class Scene {
  constructor () {
    this.loadingAnimation()
  }

  loadingAnimation () {
    const videoElm = VIDEO_CONTAINER.querySelector('video')

    // videoElm.addEventListener('loadeddata', function () {
    //   console.log(videoElm.readyState)

    //   if (videoElm.readyState === 4) {
    //     VIDEO_CONTAINER.style = 'display: block;'
    //     videoElm.play()
    //     console.log('video is loaded')
    //   }
    // })

    prefetchAssets(ASSETS)
      .then(() => {
        console.log('video loaded')
        VIDEO_CONTAINER.style.display = 'block'
        // videoElm.play()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// init
const scene = new Scene(document.querySelector('[js-hook=main]'))

export default scene
