const result = 5 + 5 + '5';
console.log(typeof result);
console.log(result);


const message = prompt("Введiть свою почту");

if (message.includes("@gmail.com")) {
  console.log("OK");
}

else {
  console.log("Error");
}


const tarantass = 'My';
const mass = 'name';
const sass = 'is';
const fullName = tarantass + " " + mass + " " + sass + " " + 'Victor'
console.log(fullName);

const userName = "Олександро";
const payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
