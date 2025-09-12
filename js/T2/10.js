console.dir(Math);

const max0 = Math.max(25, 50, 100, 2);
console.log(max0);

const min0 = Math.min(2000, 2, 667, 0.01)
console.log(min0);

const paws = Math.pow(993, 7)
console.log(paws);

const full = Math.floor(19.01)
console.log(full);

const okryg = Math.ceil(12.000001)
console.log(okryg);

const zakryg = Math.round(993.9)
console.log(zakryg);

const sqrt = Math.sqrt (10000)
console.log(sqrt);

const rnd = Math.random () * (4 - 1) + 1;
const rndrov = Math.round(rnd)
console.log(rndrov);

const random = Math.random () * (1000 - 0.0000001) + 0.1;
console.log(random);

const btnRef = document.querySelector("button");
console.log(btnRef);
btnRef.addEventListener("click", () => {
  const r = Math.round(Math.random() * (254 - 0) + 1);
  const g = Math.round(Math.random() * (254 - 0) + 1);
  const b = Math.round(Math.random() * (254 - 0) + 1);
  console.log(r, g, b);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const heit = "23cm";
const width = "10cm";
const cymma1 = parseInt(heit)
const cymma2 = parseInt(width)
const mass = cymma1*cymma2;
console.log(mass);

const isEqual1 = 0 == false;
console.log(isEqual1);

const isEqual2 = 0 !== false;
console.log(isEqual2);

//  /\_/\
// (>^-^<)

const isEqual3 = '12' == 12; 
const isEqual4 = '12' === 12;
console.log(isEqual3);
console.log(isEqual4);

const max1 = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
console.log(max1);

const min1 = Math.min(2, 34, 99, 3, 22, 36, 733, 18);
console.log(min1);
