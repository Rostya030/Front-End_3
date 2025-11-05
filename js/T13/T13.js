// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

const helpToFindLogin = (array, item) => {
    console.log(array, item);
    let message = `Користувач ${item} не знайдено.`;
    if (array.includes(item)) {
        message = `Користувач ${item} знайдено.`
    }
    return message
}
console.log(helpToFindLogin(logins, loginToFind));
