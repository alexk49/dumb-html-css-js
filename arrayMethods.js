// https://javascript.info/array-methods

function camelizeLongWinded (str) {
  // my-short-string to myShortString
  const strArray = str.split('-')
  capitlizedWordsArray = strArray.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1))
  camelized = strArray[0] + capitlizedWordsArray.join('')
  return camelized
}

console.log(camelize('background-color-new'))

function camelize (str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('')
}

console.log(camelize('background-color-new'))

function filterRange (arr, a, b) {
  return arr.filter(value => (value >= a && value <= b))
}

let arr = [5, 3, 8, 1]
console.log(filterRange(arr, 1, 4))

function filterRangeInPlace (arr, a, b) {
  return arr.filter(value => (a <= value && value <= b))
}

arr = [5, 2, 1, -10, 8]

function reverseSort (arr) {
  return arr.sort().reverse()
}

console.log(reverseSort(arr))

function decreasingSort (arr) {
  return arr.sort((a, b) => (a > b ? -1 : 1))
}

console.log(decreasingSort(arr))

function decreasingSortAlt (arr) {
  // you can return any number to sort
  // any negative counts as the -1
  // or to the back
  // any positive counts as 1
  // or to the front
  return arr.sort((a, b) => b - a)
}

console.log(decreasingSortAlt(arr))

arr = ['HTML', 'JavaScript', 'CSS']

function copySorted (arr) {
  // sort and return copy
  const copy = arr.slice(arr[0], arr.length)
  return copy.sort()
}

const sorted = copySorted(arr)
console.log(sorted)

console.log(arr)
