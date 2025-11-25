const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  showName() {
    console.log(this.name);
  },
  changeCapacity(value) {
    this.capacity = value;
  },
};



const userInfo = {
  name: "Olena",
  age: 15,
  lastName: "Marinenko",

  getName() {
    return this.name
  },

  removeName(newName) {
    return this.name = newName
  },
};

console.log(userInfo);

// userInfo.removeName("Karina")

// console.log(userInfo);



const book = {
  title: 'Майстер и Маргарита',
  author: 'Михайло Булгаков',
  year: 1967,
  genre: 'роман',
  updateBook(newTitle, newAuthor, newYear, newGenre) {
    console.log(newTitle);
    console.log(newAuthor);
    console.log(newYear);
    console.log(newGenre);
  },
};