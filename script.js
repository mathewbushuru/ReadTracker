let myLibrary = [];

function Book(title, author, numPages, alreadyRead = false, id) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.alreadyRead = alreadyRead;
  this.id = id;
}
Book.prototype.readBook = function () {
  this.alreadyRead = true;
};

const frankenstein = new Book(
  (title = "Frankenstein"),
  (author = "Mary Shelley"),
  (numPages = 280),
  (alreadyRead = true),
  (id = crypto.randomUUID())
);
addBookToLibrary(frankenstein);
const leanStartup = new Book(
  (title = "The Lean Startup"),
  (author = "Eric Ries"),
  (numPages = 336),
  (alreadyRead = true),
  (id = crypto.randomUUID())
);
addBookToLibrary(leanStartup);
const inferno = new Book(
  (title = "Inferno"),
  (author = "Dante Alighieri"),
  (numPages = 136),
  (alreadyRead = false),
  (id = crypto.randomUUID())
);
addBookToLibrary(inferno);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const addFormBtn = document.getElementById("addFormBtn");
const formWrapper = document.getElementById("formWrapper");
addFormBtn.addEventListener("click", () => {
  if (formWrapper.className.length !== 0) {
    formWrapper.className = "";
  } else {
    formWrapper.className = "hideForm";
  }
});

const currentLibraryDiv = document.getElementById("currentLibrary");

const addBookBtn = document.getElementById("addBookBtn");
const bookNameInput = document.getElementById("bookName");
const bookAuthorInput = document.getElementById("bookAuthor");
const bookPagesInput = document.getElementById("bookPages");

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    bookNameInput.value.length === 0 ||
    bookAuthorInput.value.length === 0 ||
    bookPagesInput.value.length === 0
  ) {
    return;
  }
  const newBook = new Book(
    (title = bookNameInput.value),
    (author = bookAuthorInput.value),
    (numPages = bookPagesInput.value),
    (alreadyRead = false),
    (id = crypto.randomUUID())
  );
  myLibrary.push(newBook);
  renderCurrentBooks();
  bookNameInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  bookNameInput.focus();
  formWrapper.className = "hideForm";
});

function renderCurrentBooks() {
  currentLibraryDiv.innerHTML = null;

  if (myLibrary.length === 0) {
    currentLibraryDiv.textContent = "You have no books! ";
  }

  for (let book of myLibrary) {
    const newBookCardDiv = document.createElement("div");
    newBookCardDiv.className = "newBookCard";
    newBookCardDiv.innerHTML = `<p>Title: ${book.title}</p>`;
    newBookCardDiv.innerHTML += `<p>Author: ${book.author}</p>`;
    newBookCardDiv.innerHTML += `<p>Pages: ${book.numPages}</p>`;
    newBookCardDiv.innerHTML += `<p> ${
      book.alreadyRead ? "Completed!" : "Not Read!"
    }</p>`;
    if (!book.alreadyRead) {
      newBookCardDiv.innerHTML += `<button dataId="${book.id}" class="finishBook">Read? </button>`;
    }
    newBookCardDiv.innerHTML += `<button dataId="${book.id}" class="deleteBook">Delete?</button>`;
    currentLibraryDiv.appendChild(newBookCardDiv);
  }

  const deleteBookBtns = document.querySelectorAll(".deleteBook");
  deleteBookBtns.forEach((deleteBookBtn) => {
    deleteBookBtn.addEventListener("click", () => {
      const bookToDeleteId = deleteBookBtn.getAttribute("dataId");
      myLibrary = myLibrary.filter((book) => book.id !== bookToDeleteId);
      renderCurrentBooks();
    });
  });

  const finishBookBtns = document.querySelectorAll(".finishBook");
  finishBookBtns.forEach((finishBookBtn) => {
    finishBookBtn.addEventListener("click", () => {
      const bookId = finishBookBtn.getAttribute("dataId");
      for (book of myLibrary) {
        if (book.id === bookId) {
          book.readBook();
        }
      }
      renderCurrentBooks();
    });
  });
}

renderCurrentBooks();
