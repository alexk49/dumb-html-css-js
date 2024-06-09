let sequence = [1, 2, 3];

console.log(sequence[0]);

sequence.push(4);
sequence.push(5);

console.log(sequence);

console.log(sequence.pop());

console.log(sequence);

const a = ["A", "B", "C", "D"];

console.log(a)

console.log(a[0])

console.log(a.toString())

// loop through an array

for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

const cats = ["leo", "cat-name2", "gerald"]

for (const cat of cats) {
    console.log(cat);
}

function myFunction(value) {
    console.log(value);
}

a.forEach(myFunction);

// arrays use numbered indexes like python lists
//
// whereas objects use named indexes
// and can be used more like python dictionaries/classes
const person = {firstName: "John", lastName: "Doe", age:46};

console.log(person.firstName)

