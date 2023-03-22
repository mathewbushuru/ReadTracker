let myLibrary = [];

function Book(title, author, numPages, alreadyRead = false) {
  // Book constructor
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.alreadyRead = alreadyRead;
}

const frankenstein = new Book(
  (title = "Frankenstein"),
  (author = "Mary Shelley"),
  (numPages = 280),
  (alreadyRead = true)
);
addBookToLibrary(frankenstein);
const leanStartup = new Book(
  (title = "The Lean Startup"),
  (author = "Eric Ries"),
  (numPages = 336),
  (alreadyRead = true)
);
addBookToLibrary(leanStartup);
const inferno = new Book(
  (title = "Inferno"),
  (author = "Dante Alighieri"),
  (numPages = 136),
  (alreadyRead = false)
);
addBookToLibrary(inferno);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

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
    bookNameInput.value,
    bookAuthorInput.value,
    bookPagesInput.value
  );
  myLibrary.push(newBook);
  renderCurrentBooks();
  bookNameInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  bookNameInput.focus();
});

function renderCurrentBooks() {
  currentLibraryDiv.innerHTML = null;
  for (let book of myLibrary) {
    const newBookCardDiv = document.createElement("div");
    newBookCardDiv.className = "newBookCard";
    newBookCardDiv.innerHTML = `<p>Title: ${book.title}</p>`;
    newBookCardDiv.innerHTML += `<p>Author: ${book.author}</p>`;
    newBookCardDiv.innerHTML += `<p>Number of Pages: ${book.numPages}</p>`;
    newBookCardDiv.innerHTML += `<p> ${
      book.alreadyRead ? "Completed!" : "Not Read!"
    }</p>`;
    currentLibraryDiv.appendChild(newBookCardDiv);
  }
}

renderCurrentBooks();
