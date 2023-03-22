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
addBookToLibrary(frankenstein);
addBookToLibrary(frankenstein);
addBookToLibrary(frankenstein);
addBookToLibrary(frankenstein);

const currentLibraryDiv = document.getElementById("currentLibrary");

for (let book of myLibrary) {
  const newBookCardDiv = document.createElement("div");
  newBookCardDiv.className = "newBookCard";
  newBookCardDiv.textContent = book.name;
  currentLibraryDiv.appendChild(newBookCardDiv);
}

const addBookBtn = document.getElementById("addBookBtn");
const bookNameInput = document.getElementById("bookName");

addBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
