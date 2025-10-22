const userStar = Number(prompt ('Виберiть кiлькiсть зiрок для вашого номера в готелi:'));
switch (userStar) {
    case 1:
      alert(`вартісь номеру 10$`)
        break;

    case 2:
      alert(`вартісь номеру 150$`)
        break;

    case 3:
      alert(`вартісь номеру 500$`)
        break;

    case 4:
      alert(`вартісь номеру 750$`)        
        break;

    case 5:
      alert(`вартісь номеру 50000$`)        
        break;

    default:
      alert('Багато хочешь')
        break;
}



const userCollect = Number (prompt('Виберiть способ доставки посилки яку ви замовили ще 9 рокiв тому. 1 - самовивіз, 2 - кур"єр, 3 - пошта'));
const collect = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
const courier = 'Кур"єр доставить замовлення завтра з 9:00 до 18:00';
const mail = 'Посилка буде відправлена сьогодні';
const call = 'Вам передзвонит менеджер';

switch (userCollect) {
    case 1:
     alert(collect);
      console.log(collect);
       break;

    case 2:
     alert(courier);
      console.log(courier);
       break;

    case 3:
     alert(mail);
      console.log(mail);
       break;

    default:
     alert(call)
      console.log(call);
       break;
}

//  якась задача була там я забув

const day = prompt("введіть день тижня").toLowerCase().trim();

switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        alert("це робочий день");
        break;
    case "saturday":
    case "sunday":
        alert("це вихідний день");
        break;
    default:
        alert("не вірно введені дані");
        break;
}


// там теж шось було-о-о-о там сiчень, да

function showMonth(lang) {
    let monthName;

    switch (lang) {
        case 'ua':
            monthName = "Січень"; 
            break;
        case 'en':
            monthName = "January"; 
            break;
        case 'fr':
            monthName = "Janvier"; 
            break;
        default:
            monthName = "невiдома мова";
            break;
    }

    console.log(`Выбран язык: ${lang}. Название месяца: "${monthName}"`);
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-container button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const langCode = button.dataset.lang; 
            showMonth(langCode);
        });
    });
});
