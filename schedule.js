function isEmpty (object) {
  for (const key in object) {
    return false
  }
  return true
}

schedule = {}

console.log(isEmpty(schedule))

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let total = 0

for (const name in salaries) {
  total = total + salaries[name]
}

console.log(total)
