const zapit =  Number(prompt('Виберiть "Кава", "Чай" або "Сiк" (1 - Кава, 2 - Чай, 3 - Сiк)'))
const coffee = 'Дякую за заказ, чекайте 15 хивилин';
const tea = 'Дякую за заказ, чекайте 10 хивилин'
const socket = 'Дякую за заказ, чекайте 5 хивилин'
switch (zapit) {
    case 1:
     alert(coffee)
      console.log(coffee);
        break;
    

    case 2:
     alert(tea)
      console.log(tea);
        break;


    case 3:
     alert(socket)
      console.log(socket);
        break;

    default:
      ('не поняв')
        break;
}