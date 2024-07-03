function addOne (num) {
  return num + 1
}

const arr = [1, 2, 3, 4, 5]

const mappedArr = arr.map(addOne)

console.log(arr)
console.log(mappedArr)

const newArray = arr.map((num) => num * 3)

console.log(newArray)
