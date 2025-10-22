// ЗАДАЧА 1
let i = 0
while (i < 10) { 
    i += 1
    console.log(i);
}



// ЗАДАЧА 2
for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) { 
        continue;
    }
    console.log(i);
}



// ЗАДАЧА 3
const multiplier = 7;
const limit = 10;

console.log(`Таблиця множення на ${multiplier}:`);
console.log('---------------------------');

for (let i = 1; i <= limit; i++) {
    const result = multiplier * i;
    console.log(`${multiplier} x ${i} = ${result}`);
}
console.log('---------------------------');


// Промiжуточний код
console.log('--                       --');
// Промiжуточний код 

// ЗАДАЧА 4
let currentNumber = 5; 
const limet = 20;       

console.log("---------------------------");

while (currentNumber <= limet) {
    
    if (currentNumber >= 15) {
        console.log(`Знайдено число ${currentNumber}, яке >= 15.`);
        break; 
    }

    console.log(`Число: ${currentNumber}`);
    
    currentNumber += 2; 
}

console.log("---------------------------");



// ЗАДАЧА 5
let q = 0;

while (q < 20) {
    q++;
    
    if (q % 3 === 0) {
        continue;
    }
    
    console.log(q);
}