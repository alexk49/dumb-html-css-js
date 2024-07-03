const day1 = {
  squirrel: false,
  events: ['work', 'touched tree', 'pizza', 'running']
}

console.log(day1.squirrel)
console.log(day1.wolf)

day1.wolf = false

console.log(day1)

console.log(day1.wolf)

const anObject = { left: 1, right: 2 }

console.log(anObject.left)

// view keys of given object
console.log(Object.keys(anObject))

console.log(Object.keys(day1))

// assign value to object
Object.assign(day1, { wolf: true })

console.log(day1.wolf)
console.log(day1)

function makeUser (name, age) {
  return {
    name,
    age
    // ...other properties
  }
}

const user = makeUser('John', 30)
console.log(user.name) // John
const key = 'name'
console.log(key in user) // returns true

console.log('John' in user) // returns false

for (keyValue in user) {
  console.log(keyValue)
  console.log(user[keyValue])
}
