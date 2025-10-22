let i = 0
while (i < 10) { 
    i += 1
    console.log(i);
}



for (let i = 2; i <= 20; i += 1) {
    if (i % 2 === 0) {
        continue; 
    }
    console.log(i);
}


const multiplier = 7;
const limit = 10;

console.log(`Таблиця множення на ${multiplier}:`);
console.log('---------------------------');

for (let i = 1; i <= limit; i++) {
    const result = multiplier * i;
    console.log(`${multiplier} x ${i} = ${result}`);
}
console.log('---------------------------');




const numbers = [5, 14.999, 9, 12, 14, 39535294, 12, 835, 20];

for (const number of numbers) {
    // Перевіряємо, чи поточне число більше або дорівнює 15
    if (number >= 15) {
        console.log(`Знайдено число ${number}, яке >= 15.`);
        break; 
    }

    console.log(`Число: ${number}`);
}



let q = 0;

while (q < 20) {
    q++;
    
    if (q % 3 === 0) {
        continue;
    }
    
    console.log(q);
}



