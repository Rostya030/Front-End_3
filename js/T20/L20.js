// Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style. 
const linkRef = document.querySelector('a')
console.log(linkRef);
linkRef.style.color = 'orange'



// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
const linkUl = document.querySelectorAll('ul > li > a')
console.log(linkUl);
linkUl[0].classList.add('first')
linkUl[5].classList.add('last')