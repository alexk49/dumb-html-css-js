let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
console.log(day1.wolf);

day1.wolf = false

console.log(day1);

console.log(day1.wolf);

let anObject = {left: 1, right: 2};

console.log(anObject.left);

// view keys of given object
console.log(Object.keys(anObject));

console.log(Object.keys(day1));

// assign value to object
Object.assign(day1, {wolf: true});

console.log(day1.wolf);
console.log(day1);
