/**
 * Random number between min and max value
 * @param {number} min
 * @param {number} max
 */
const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default randomBetween

/* Usage:
   randomBetween(10, 30)
*/
