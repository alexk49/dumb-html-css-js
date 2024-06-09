function saySomething() {
    console.log("Hello!");
};

saySomething();

const square = (x) => x * x;
const carHorn = () => {
    console.log("Toot");
};

square(2);

carHorn;

const roundTo = function(n, step = 1) {
    // step is set as 1 by default
    // if no arg is passed
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));


console.log(roundTo(23.2, 5));

function minus(a, b) {
    // if an arg is not passed then
    // it will be undefinied
    if (b === undefined) return -a;
    else return a - b;
}
