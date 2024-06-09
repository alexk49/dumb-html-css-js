// find the third highest number in the array

// sort the array

let numbers = [2, 5, 6, 7, 8, 9, 11];

function findThirdHighest (arrayOfNumbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);

    let size = sortedNumbers.length;

    return sortedNumbers[size - 3];
}

console.log(findThirdHighest(numbers));
