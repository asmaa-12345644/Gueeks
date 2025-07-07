const allBooks = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "https://m.media-amazon.com/images/I/41aQPTCmeVL._SX331_BO1,204,203,200_.jpg",
      alreadyRead: true
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://m.media-amazon.com/images/I/41EGoD8B1jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      alreadyRead: false
    }
  ];
  
  const section = document.querySelector('.listBooks');

allBooks.forEach(book => {
  const bookDiv = document.createElement('div');
  bookDiv.style.marginBottom = '20px';

  const titleAuthor = document.createElement('p');
  titleAuthor.textContent = `${book.title} by ${book.author}`;

  const image = document.createElement('img');
  image.src = book.image;
  image.style.width = '100px';

  
  if (book.alreadyRead) {
    titleAuthor.style.color = 'green';
  } else {
    titleAuthor.style.color = 'red';
  }

  bookDiv.appendChild(titleAuthor);
  bookDiv.appendChild(image);
  section.appendChild(bookDiv);
  
});
