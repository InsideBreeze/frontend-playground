export default function debounce(callback, delay) {
  let timeoutId

  return (...args) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = undefined
      callback(...args)
    }, delay)
  }
}
