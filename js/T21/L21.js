const textRef = document.querySelector('.text');
console.log(textRef.textContent);
console.log(textRef.innerHTML);
textRef.innerHTML = '<h1>Hello</h1>';
console.log(textRef);



const names = [
  "Андрій",
  "Олександр",
  "Максим",
  "Дмитро",
  "Іван",
  "Михайло",
  "Артем",
  "Владислав",
  "Назар",
  "Богдан"
];

const itemsRef = document.querySelector('.items')
// console.log(itemsRef);
const nameItem = names.map((item) => {
  return `<li><p>${item}</p>
  </li>`
}).join('')
// console.log(nameItem);

itemsRef.innerHTML = nameItem

console.log(itemsRef);



const students = [
  { name: "Anna", age: 20, gender: "female", grade: 85 },
  { name: "Ivan", age: 22, gender: "male", grade: 90 },
  { name: "Olena", age: 19, gender: "female", grade: 78 },
  { name: "Petro", age: 21, gender: "male", grade: 92 },
];

const studentsItem = students.map((item) => {
  return `<li>
    <p>im'я ${item.name}</p>
    <p>Riк ${item.age}</p>
    <p>GenДер ${item.gender}</p>
    <p>Сеreднiй БаLL ${item.grade}</p>
  </li>`
}).join("")

listRef.insertAdjacentHTML("beforeend", studentsItem)
console.log(listRef);