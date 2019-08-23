/**
 * Prefetch animation assets and resolve when enouch is prefetched
 * @returns Promise - Gets resolved when all promises inside are resolved (assets fully loaded)
 */

export const prefetchAssets = elements => {
  const promises = []

  elements.forEach(el => {
    if (el.tagName.toLowerCase() === 'video') el.crossOrigin = 'anonymous'
    const srcUrl = el.getAttribute('data-prefetch')
    const xhr = new XMLHttpRequest()
    xhr.open('GET', srcUrl, true)
    xhr.setRequestHeader('Cache-Control', 'max-stale')
    xhr.responseType = 'blob'

    promises.push(
      new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            el.src = (window.URL || window.webkitURL || window || {}).createObjectURL(xhr.response)
            resolve()
          }
        }
      })
    )
    xhr.send()
  })

  return Promise.all(promises)
}
