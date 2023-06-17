const removeBook = (element, id) => {
  const index = element.books.findIndex((book) => book.id === Number(id));
  if (index !== -1) {
    element.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(element.books));
  }
};

export default removeBook;