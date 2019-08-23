/**
 * Returns random color
 */
const randomColor = () => {
  const color = {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
    toString: function (a) {
      if (a) {
        return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + a + ')'
      }
      return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')'
    }
  }
  return color
}

export default randomColor()

/* Usage:
   randomColor.toString(0.5) // returns rgba
*/
