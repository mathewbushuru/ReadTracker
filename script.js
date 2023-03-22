let myLibrary = [];

function Book(name) {
  // Book constructor
  this.name = name;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let frankenstein = new Book("Frankenstein");
addBookToLibrary(frankenstein);
let leanStartup = new Book("The Lean Startup");
addBookToLibrary(leanStartup);
let tedTalks = new Book("TED Talks");
addBookToLibrary(tedTalks);

const currentLibraryDiv = document.getElementById("currentLibrary");

const addBookBtn = document.getElementById("addBookBtn");
const bookNameInput = document.getElementById("bookName");

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newBook = new Book(bookNameInput.value);
  myLibrary.push(newBook);
  renderCurrentBooks();
  bookNameInput.value = "";
  bookNameInput.focus();
});

function renderCurrentBooks() {
  currentLibraryDiv.innerHTML = null;
  for (let book of myLibrary) {
    const newBookCardDiv = document.createElement("div");
    newBookCardDiv.className = "newBookCard";
    newBookCardDiv.textContent = book.name;
    currentLibraryDiv.appendChild(newBookCardDiv);
  }
}

renderCurrentBooks();
