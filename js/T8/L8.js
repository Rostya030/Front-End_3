console.log(appercode);

array[0] = "qwerty"

console.log(array[0]);

console.log(array);

console.log(array[array.length -1]);


const appercode = ['kryakvy', 'pushky', 'sgushienky', 'key', "add's", "pumpkin's", 'coffy', 'alarmy', 'deti', 'v', 'podvale', 'ta', 'struimesha']

let i = 0
for (let i = 0; i < appercode.length; i += 1) {
    console.log("№", i, "тримае:", appercode[i]);
}



let plumbers = [1, 3, 7, 4, 9];
for (let i = 4; i < plumbers.length; i += 1) {
    console.log('вроде чатире', i);
}



let numbers = [153, 3155, 753, 4, 97];
for(let i = 0; i < numbers.length; i+=1){
    if(numbers[i] %2 !== 0){
        continue;
    }
    console.log(numbers[i]);
}



let pampersant = [5, -3, 8, -11, 10];
for (let i = 0; i < pampersant.length; i += 1) {
    if (pampersant[i] %0 !== -0) {
        console.log(i);
        
    }
}



const arr = [1, 3, 5, 6, 7, "12", 5, "34"];

let sum = 0;

for (const element of arr) {
    if (typeof element === 'number') {
        sum += element;
    }
}

console.log(sum);