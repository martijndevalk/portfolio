// import './components/scene2'
import './components/slider'

const init = () => {
  const html = document.documentElement
  html.classList.remove('no-js')
  html.classList.add('js')
}

// const ready = (callback) => {
//   if (document.readyState !== 'loading') callback()
//   else document.addEventListener('DOMContentLoaded', callback)
// }

// ready(() => {
//   init()
// })

document.addEventListener('DOMContentLoaded', init, { once: true })
