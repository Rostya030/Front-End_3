let i = 1;
while (i < 5) {
    console.log(i);
    i += 1
}


let q = 0;
let s = 10000; 
while (q < 10) {
    s += q 
    q += 2

    console.log(q);
    console.log(s);
}


let ew;
do {
    ew = Number(prompt('Введiть число бiльше 10-ти'))
}

while ( ew <= 10)
    console.log(ew);


let g;
do {
    g = Number(prompt('Введiть число бiльше 0'))
}
while (g > 0 || isNaN(g)) {
    console.log(g);
}


let userPhone;

do {
    userPhone = prompt("введіть номер телефону 10 цифр");
    if (userPhone === null){
        alert("операція скасована")
        break
    }
} while (true)

console.log(userPhone);


