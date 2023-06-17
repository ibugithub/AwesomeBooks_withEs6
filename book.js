import DateTime from './node_modules/luxon/src/datetime.js';
import displayBooks from './modules/displayBooks.js';
import showAddBookSection from './modules/showAddBookSection.js';
import showContactSection from './modules/showContactSection.js';
import removeBook from './modules/removeBook.js';
import addBook from './modules/addBook.js';

document.querySelector('#dateTime').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
class Books {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  displayBooks = () => {
    displayBooks();
    this.bookRemoveHandling();
  };

  addBook = (title, author) => {
    addBook(this, title, author);
  }

  removeBook = (id) => {
    removeBook(this, id);
  }

  showAddBookSection = () => {
    showAddBookSection(this);
    this.addBookFormHandle();
  }

  showContactSection = () => {
    showContactSection();
  }

  addBookFormHandle = () => {
    const addBookForm = document.getElementById('add-book-form');
    addBookForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      this.addBook(title, author);
      this.displayBooks();
      addBookForm.reset();
    });
  };

  bookRemoveHandling = () => {
    const bookList = document.querySelector('#book_list');
    bookList.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-title')) {
        const { id } = event.target.dataset;
        this.removeBook(id);
        this.displayBooks();
      }
    });
  };
}

const books = new Books();
books.displayBooks();
books.bookRemoveHandling();
document.querySelector('#list').addEventListener('click', books.displayBooks);
document.querySelector('#add_new').addEventListener('click', books.showAddBookSection);
document.querySelector('#contact').addEventListener('click', books.showContactSection);
