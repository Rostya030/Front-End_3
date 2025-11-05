const title = "Top 10 Benefits Of React Fremework";
const slug = title
    .toLowerCase()
    .split(' ')
    .join('-')
    .replace(/[^a-z0-9-]/g, '');

console.log(slug);


for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) { 
        continue;
    }
    
    console.log(i);
}


let q = 0;
while (q < 20) {
    q++;
    
    if (q % 3 === 0) {
        continue;
    }
    
    console.log(q);
}


const numbers = [1, 3, 5, 6, 7, "12", 5, "34"];
let sum = 0;
for (const element of numbers) {
    if (typeof element === 'number') {
        sum += element;
    }
}
console.log(sum);


let art = 20;
for (let i = 2; i <= art; i += 1) { 
    console.log(i);
}


const numbersArray = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbersArray[0];

for (let i = 0; i < numbersArray.length; i += 1) {
    if ( smallestNumber > numbersArray[i] ) {
        smallestNumber = numbersArray[i];
    }
}

console.log(smallestNumber);