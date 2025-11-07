// Завдання 1
const task1Array = [1, 5, 9];
task1Array[1] = 10;
console.log('Завдання 1:', task1Array);

// Завдання 2
const task2Array = ["Яблуко", "Банан", "Апельсин"];
task2Array.push("Манго");
console.log('Завдання 2:', task2Array);

// Завдання 3
const task3Array = [10, 5, 2, 3, 1];
let totalSum = 0;
for (const number of task3Array) {
    totalSum += number;
}
console.log('Завдання 3:', totalSum);

// Завдання 4
const task4Array = [100, 200, 300, 400, 500];
console.log('Завдання 4:');
for (let i = 0; i < task4Array.length; i += 1) {
    console.log(task4Array[i]);
}

// Завдання 5
const task5Array = ["Море", "Сонечко", "Кіт", "Зірка", "Планета"];
console.log('Завдання 5:');
for (const word of task5Array) {
    if (word.length > 5) {
        console.log(word);
    }
}

// Завдання 6
const task6Array = [12, 5, 88, 3, 40, 99, 15, 2, 70, 9];
let maxNumber = task6Array[0];
for (const number of task6Array) {
    if (number > maxNumber) {
        maxNumber = number;
    }
}
console.log('Завдання 6:', maxNumber);

// Завдання 7
const task7Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Завдання 7:');
for (const number of task7Array) {
    if (number % 2 === 0) {
        console.log(number);
    }
}