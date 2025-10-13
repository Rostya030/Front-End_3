const zapit =  Number(prompt('Виберiть "Кава", "Чай" або "Сiк" (1 - Кава, 2 - Чай, 3 - Сiк)'))
const coffee = 'Дякую за заказ, чекайте 15 хивилин';
const tea = 'Дякую за заказ, чекайте 10 хивилин'
const socket = 'Дякую за заказ, чекайте 5 хивилин'
switch (zapit) {
    case 1:
     alert(coffee)
      console.log(coffee);
        break;
    

    case 2:
     alert(tea)
      console.log(tea);
        break;


    case 3:
     alert(socket)
      console.log(socket);
        break;

    default:
      ('не поняв')
        break;
}



const day = prompt("введіть день тижня на англiйскiй мовi (monday - Понедiлок, tuesday - Вiвторок, wednesday - Среда, thursday - четвер, friday - П'ятниця, saturday - Суббота, sunday - Недiлля)").toLowerCase().trim();

switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        alert("це робочий день");
        break;
    case "saturday":
    case "sunday":
        alert("це вихідний день");
        break;
    default:
        alert("не вірно введені дані");
        break;
}




const monthNumber = Number(prompt('Введiть число мiсяця у цифрах (вiд 1 до 12)')); 
let season;

switch (monthNumber) {
    // Зима: 12 (Грудень), 1 (Січень), 2 (Лютий)
    case 12:
    case 1:
    case 2:
        season = "Зима ❄️";
        break;

    // Весна: 3 (Березень), 4 (Квітень), 5 (Травень)
    case 3:
    case 4:
    case 5:
        season = "Весна 🌸";
        break;

    // Літо: 6 (Червень), 7 (Липень), 8 (Серпень)
    case 6:
    case 7:
    case 8:
        season = "Літо ☀️";
        break;

    // Осінь: 9 (Вересень), 10 (Жовтень), 11 (Листопад)
    case 9:
    case 10:
    case 11:
        season = "Осінь 🍂";
        break;

    default:
        season = "Невірний номер місяця. Будь ласка, введіть число від 1 до 12.";
        break;
}

// Виведення результату
console.log(`Місяць №${monthNumber} відповідає порі року: ${season}`);



const colorName = prompt("Введiть;sd;  'зелений', 'червоний' або 'жовтий'");

let trafficMessage;

switch (colorName.toLowerCase()) {
    case "червоний":
        trafficMessage = "СТОП 🔴";
    alert(`стоять, куда?`)
        break;
    case "жовтий":
        trafficMessage = "ЧЕКАТИ 🟡";
    alert(`ну пiдожди чуток.`)
        break;
    case "зелений":
        trafficMessage = "ЙТИ 🟢";
    alert(`та йди вже.`)
        break;
    default:
        trafficMessage = "Невідомий колір світлофора.";
        break;
}

console.log(`Вибраний колір: ${colorName}`);
console.log(`Повідомлення: ${trafficMessage}`);



const num1 = Number(prompt('Введiть перше число'));
const num2 = Number(prompt('Введiть число друге'));
const operator = prompt('Введiть любий знак (+, -, *, /) ');

let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':

        if (num2 === 0) {
            result = "ПОПЕРЕДЖЕННЯ: Ділення на нуль неможливе! ⚠️";
        } 
        
        else {
            result = num1 / num2;
        }
        break;
    default:
        result = "Невірний оператор. Спробуйте +, -, *, або /.";
        break;
}

console.log(`Операція: ${num1} ${operator} ${num2}`);
console.log(`Результат: ${result}`);