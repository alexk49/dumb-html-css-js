// similar to filter / map

/*

    The callback function takes two arguments instead of one. The first argument is the accumulator, which is the current value of the result at that point in the loop. The first time through, this value will either be set to the initialValue (described in the next bullet point), or the first element in the array if no initialValue is provided. The second argument for the callback is the current value, which is the item currently being iterated on.
    It also takes in an initialValue as a second argument (after the callback), which helps when we don’t want our initial value to be the first element in the array. For instance, if we wanted to sum all numbers in an array, we could call reduce without an initialValue, but if we wanted to sum all numbers in an array and add 10, we could use 10 as our initialValue.
*/

const arr = [1, 2, 3, 4, 5]

// total starts at one as this is given as value
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem
}, 1)

// no value given, so starts at one as that is first number in array
const product = arr.reduce((total, currentItem) => {
  return total * currentItem
})

console.log(arr)
console.log(productOfAllNums)

console.log(product)

otherArr = [0, 1, 2, 3]
// starts at 0 so returns 0
const otherProd = otherArr.reduce((total, currentItem) => {
  return total * currentItem
})

console.log(otherProd)
