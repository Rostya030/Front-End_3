const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if ( smallestNumber > numbers[i] ) {
        smallestNumber = numbers[i]
    }
}

console.log(smallestNumber);