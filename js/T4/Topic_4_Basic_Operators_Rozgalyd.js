console.log("Тема 4 Д\З!");

const field1 = prompt("Заполните первое поле:");
const field2 = prompt("Заполните второе поле:");

if (field1 !== null && field1.trim().length > 0 && field2 !== null && field2.trim().length > 0) {
  console.log("Обидва поля заповнені");
} 

else {
  console.log("Не всі поля заповнені");
}



const numberZero = prompt("Введiть число");
const raxyvalnik = numberZero >= 10;
console.log(raxyvalnik);



const numberOne = Number(prompt("Введіть число:"));

if (numberOne >= 10 && numberOne <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}



const text = "Приклад тексту з JavaScript.";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} 

else {
  console.log("Текст не містить слово JavaScript");
}



const mamename = prompt("Введіть ваше ім'я:");
const email = prompt("Введіть ваш email:");
const password = prompt("Введіть ваш пароль:");

// Перевірка імені (не менше 3 символів)
const isNameValid = mamename !== null && mamename.trim().length >= 3;

// Перевірка email (містить "@" і "." після нього)
const isEmailValid = email !== null && email.includes("@") && email.includes(".");

// Перевірка пароля (не менше 6 символів)
const isPasswordValid = password !== null && password.length >= 6;

// Перевірка всіх умов
if (isNameValid && isEmailValid && isPasswordValid) {
  console.log("Перенаправлення на іншу сторінку");
  console.log(`Ваше ім'я: ${mamename}`);
  console.log(`Ваша пошта: ${email}`);
  console.log(`Ваш пароль: ${password}`);
} 

else {
  console.log("Помилка: неправильне заповнення");
}
