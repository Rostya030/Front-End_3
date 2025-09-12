const fahrenheit = 212;
const adds1 = 1.8;
const adds2 = 32;
const result = fahrenheit - adds2;
const celsius = result / adds1;
console.log(celsius);

const daysInMonth = 31
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth);
console.log(minutesInMonth);

let health = 500;
let energy = 100;

const damageHealthBtn = document.getElementById("damageHealthBtn");
const decreaseEnergyBtn = document.getElementById("decreaseEnergyBtn");
const increaseEnergyBtn = document.getElementById("increaseEnergyBtn");

console.log(`Початковий рівень здоров'я: ${health}`);
console.log(`Початковий рівень енергії: ${energy}`);

// Здоров'я тільки зменшується
damageHealthBtn.addEventListener("click", () => {
    health = health - 2.5;
    console.log(`Рівень здоров'я після удару: ${health}`);
});

// Енергія зменшується
decreaseEnergyBtn.addEventListener("click", () => {
    energy = energy - 15;
    console.log(`Рівень енергії після зменшення: ${energy}`);
});

// Енергія відновлюється
increaseEnergyBtn.addEventListener("click", () => {
    energy = energy + 10;
    console.log(`Рівень енергії після відновлення: ${energy}`);
});

const totalPrice = 1000;
const discount = 10;
const discountedPrice = totalPrice - (totalPrice * discount / 100);
console.log(discountedPrice);

const floatNumber = Math.floor(12.78)
console.log(floatNumber);

const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

const intString = "123"
const parsedInt = parseInt(intString)
console.log(parsedInt);

const number = 993;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const integer = 32;
const convertedString = integer.toString();
console.log(convertedString);

const stringNumber = "256"
const parsaitna = parseInt(stringNumber)
console.log(parsaitna);
