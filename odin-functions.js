function add7(num) {
    if (typeof(num) != "number") {
        console.log("that's not a number, I'm not adding 7 to that");
        return false
    }
    else {
        return num + 7;
    }
};

function multiply(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number")
    {
        console.log("one of these isn't a number... I'm not multiplying them...");
        return false
    }
    else {
        return num1 * num2;
    }
};

function capitalize(word) {
    if (typeof(word) != "string") {
        console.log("that's not a string, I'm not capitalizing that")
        return false;
    }
    else {
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

function lastLetter(word) {
    if (typeof(word) != "string") {
        console.log("that's not a string, I'm not giving you the last letter of that.")
        return false;
    }
    else {
        let index = word.length; 
        return word.charAt(index - 1);
    }
}


console.log(add7(7));

console.log(multiply(2, 6));

console.log(capitalize("caps"));

console.log(lastLetter("giveMetheLastLetter"));
