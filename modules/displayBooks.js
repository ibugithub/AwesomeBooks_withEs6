const displayBooks = () => {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const container = document.querySelector('.main_section');
  const bookList = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'All awesome books';
  container.appendChild(heading);

  bookList.id = 'book_list';
  container.innerHTML = '';
  container.appendChild(heading);
  container.appendChild(bookList);
  books.forEach((book) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book');
    bookItem.innerHTML = `${book.title} by ${book.author}<button class="remove-title" data-id="${book.id}">Remove</button>`;
    bookList.appendChild(bookItem);
    container.appendChild(bookList);
  });
};

export default displayBooks;