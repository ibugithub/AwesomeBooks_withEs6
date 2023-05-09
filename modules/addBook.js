const addBook = (element, title, author) => {
  const book = { title, author, id: Date.now() };
  element.books.push(book);
  localStorage.setItem('books', JSON.stringify(element.books));
};

export default addBook;