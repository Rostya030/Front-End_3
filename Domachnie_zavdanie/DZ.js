const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let stringFor = '';
for (let i = 0; i < friends.length; i++) {
  stringFor += friends[i];
  if (i < friends.length - 1) {
    stringFor += ', ';
  }
}
console.log(stringFor);

const stringJoin = friends.join(', ');
console.log(stringJoin);

let cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.log(cards);

const cardToRemove = 'Карточка-3';
const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}

console.log(cards);

const cardToInsert = 'Карточка-6';
const indexToInsert = 2;

cards.splice(indexToInsert, 0, cardToInsert);

console.log(cards);

const cardToUpdate = 'Карточка-4';
const newCardValue = 'Обновленная-' + cardToUpdate;

const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards.splice(indexToUpdate, 1, newCardValue);
}

console.log(cards);