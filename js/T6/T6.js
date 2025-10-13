for(let i = 25; i <= 100; i += 25){
    console.log(i);
}



const text = '   i like Roma   '
for (let i = 0; i < text.length; i += 1) {
    console.log(text[i]);
    
}



const message = "i love java skript";
for (let i = 0; i < message.length; i += 1) {
    if (message[i] === ' ') {
        continue
    }

    console.log(message[i]);
}



let sumn = 0
for(let i = 1; i <= 100; i += 1){
    sumn += i;
}
console.log(sumn);



for (let i = 0; i <= 10; i += 1) {
    console.log(`5 × ${i} = ${5 * i}`);
}