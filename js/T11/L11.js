// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає   укорочену версію.

function formatString(string) {
    console.log(string.length);
    if (string.length <= 40) {
        return string
    }
    else {
     const obrix = string.slice(0, 40)+'...'
     return obrix;
    }
}
console.log(formatString('lorem isput unput doollar masive this thx in the proggram game gev in game pink'));
console.log(formatString('lorem isput unput doollar masive '));
console.log(formatString('три крапки "...", після чого повертає   укорочену версію.'));
console.log(formatString('Якщо довжина більше 40 символів, то функція обрізає рядок до'));
console.log(formatString('Якщо довжина рядка не перевищує 40 символів'));
console.log(formatString('Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді.Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка '));
console.log(formatString('login'));
