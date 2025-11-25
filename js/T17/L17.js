// //Примітивні типи даних
// let a = 5;
// let b = a;
// b = 1000;
// console.log(a);
// console.log(b);

// //складний тип даних
// const c = {
//   a: 5,
// }

const objD = c;

objD.a = 400000

console.log(c);
console.log(objD);



// Примітивні типи даних
let a = 5;
let b = a;
b = 1000;
console.log(a);
console.log(b);

// складний тип даних
const c = {
  a: 5,
};

const objD = c;

objD.a = 400000;

console.log(c);
console.log(objD);


const objA = {
  a: 5,
  b: 10,
  c: 15,
};

const objB = {
  d: 50,
  e: 100,
  f: 150,
  a: 1000000000000,
};


const objC = {
  ...objA,
  ...objB,
};

console.log(objC);



const names = ["Artem", "Sofia", "Mykola"];

const copyNames = [...names];

copyNames.push("Daria");

console.log(names);
console.log(copyNames);



const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

console.log(housesInDebt);



const namess = ["Artem", "Sofia", "Mykola"];

const copyNamess = [...names];
const copy2 = names.slice();

console.log("origin", names);
console.log("spred", copyNames);
console.log("slise", copy2);











const user = {
  hobby: "footbol",
  premium: true,
};
user.mood = "happy";
user.hobby = 'skydiving';
user.premium = false;

const k = Object.keys(user);
for(let i of k){
  console.log(i, user[i]);
}



const obgA = {
  hobby: "footbol",
  premium: true,
  mood: "happy",
  y: 35,
};

const countProps = (obj) =>{
  let key = Object.keys(obj);
  return key.length;
};

console.log(countProps(obgA));



const employee = {
  Olena : 25,
  Ihor : 5,
  Irma : 60,
  Bohdan: 64,
};

function findBestEmployee(employee) {
  let bestName = "";
  let maxTask = 0;
  const entries = Object.entries(employee);
  console.log(entries);

  for(const i of entries){
    // console.log(i);
    // console.log(i[1]);
    if(i[1]>maxTask){
      maxTask = i[1]
      bestName = i[0]
    }
  }
  return `${bestName}: ${maxTask}`;
}

console.log(findBestEmployee(employee));