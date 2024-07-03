array = [1, 2, 3, 4, 5]

function trippleEvenNum (num) {
  if (num % 2 === 0) {
    return num * 3
  } else {
    return num
  }
}

// mapping
const result = array.map(trippleEvenNum)

console.log(result)

function isEven (num) {
  return num % 2 === 0
}

const evenNums = array.filter(isEven)

console.log(evenNums)

function sumOfTrippledEvens (array) {
  return array.filter((num) => num % 2 === 0).map((num) => num * 3).reduce((acc, curr) => acc + curr)
}

console.log(sumOfTrippledEvens(array))
