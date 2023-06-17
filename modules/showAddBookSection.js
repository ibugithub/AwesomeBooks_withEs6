const showAddBookSection = () => {
  const container = document.querySelector('.main_section');
  container.innerHTML = ` 
    <div id="add_book_section">

    <div class="addBS_title">
      <h2>Add a new book</h2>
    </div>

    <form id="add-book-form">
      <input type="text" id="title" name="title" placeholder="title" required>
      <br>
      <input type="text" id="author" name="author" placeholder="author" required>
      <br>
      <div class="button_container">
        <button class="button-add margin-right0" type="submit">Add</button>
      </div>
    </form>

  </div>
  `;
};

export default showAddBookSection;