const printMessage = function (message) {
  console.log(message);
};

const higherOrderFunction = function (callback) {
  const string = 'HOCs are awesome';
  callback(string);
};

higherOrderFunction(printMessage);



function calculator(callback, a, b) {
    return callback(a, b);
}

function plus (a, b) {
    return `result add number ${a} + ${b} = ${a + b}`;
}

function minus (a, b) {
    return `result minus number ${a} - ${b} = ${a - b}`;
}

function multiply (a, b) {
    return `result multiply number ${a} * ${b} = ${a * b}`;
}

function divide (a, b) {
    return `result divide number ${a} / ${b} = ${a / b}`;
}

console.log(calculator(plus, 7, 993));
console.log(calculator(minus, 1000, 7));
console.log(calculator(multiply, 99.3, 10));
console.log(calculator(divide, 10, 0));





// Call-овый бак: кароткае слова в (Call-овой) массе

function processingArray(arrey, callback) {
    return callback(arrey);
}

let strings = ["Самахоная_Артелерiйна_Установка", "Танк", "Бульдозер", "Асфальтоукладчик", "Aня"];

function searchMinString(arrey) {
    let min = arrey[0];
    
    for (const str of arrey) {
        if (min.length > str.length) {
            min = str;
        }
    }
    
    return `Найкоротше iм'я: "${min}"`; 
}

console.log(processingArray(strings, searchMinString));





//ну задание там хе

function transformArray(callback, array, numbers) {
    return callback(array, numbers);
}

const numbers = [12, 24, 42, 34];
const deletete = 2;

function delimetrAllNumbers(array, num) {
    const newArray = [];
    
    for (let i = 0; i < array.length; i += 1) {
        newArray.push(array[i] * num); 
    }
    
    return newArray;
}

console.log(transformArray(delimetrAllNumbers, numbers, deletete));