function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//display function Book
Book.prototype.displayInfo = function () {
  console.log(
    `Book title: ${this.title} -- Author: ${this.author}  -- ISBN: ${this.isbn}`
  );
};

function FictionBook(title, author, isbn, additionalGenre) {
  Book.call(this, title, author, isbn);
  this.additionalGenre = additionalGenre;
}
FictionBook.prototype = Object.create(Book.prototype);
FictionBook.prototype.constructor = FictionBook;
//display function FictionBook overwrites the display function from Book class
FictionBook.prototype.displayInfo = function () {
  console.log(
    `Fiction Book title: ${this.title} -- Author: ${this.author} -- Additional Genre: ${this.additionalGenre} -- ISBN: ${this.isbn}`
  );
};

function Library(books) {
  this.books = books;
}
//Function for adding books in the library
Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
  console.log(
    `In this library you have added the following books: ${newBook.title}`
  );
};
Library.prototype.displayLibrary = function () {
  console.log("Your library has the following books: ");
  this.books.forEach(function (book) {
    console.log(book.title);
  });
};

function LibraryMember(name, library) {
  this.name = name;
  this.library = library;
  this.booksBorrowed = [];
}

LibraryMember.prototype.borrowBook = function (book) {
  // Check if the book is available in the library
  if (this.library.books.includes(book)) {
    // Add the book to the member's borrowed books
    this.booksBorrowed.push(book);
    console.log(`${this.name} has borrowed the book: ${book.title}`);
  } else {
    console.log(
      `${this.name}, the book ${book.title} is not available in the library.`
    );
  }
};

LibraryMember.prototype.displayBorrowedBooks = function () {
  console.log(`${this.name}'s borrowed books:`);
  this.booksBorrowed.forEach(function (book) {
    console.log(book.title);
  });
};

//tests
var book1 = new Book("Rich dad, poor dad", "Robert Kiosaki", 12345);
var book2 = new Book("Emotional Inteligence", "Daniel Goleman", 12346);

var fictionBook1 = new FictionBook(
  "Angels and Demons",
  "Dan Brown",
  12121,
  "Drama"
);
var fictionBook2 = new FictionBook(
  "The Da Vinci Code",
  "Dan Brown",
  12134,
  "Thriller"
);

var myBooksArray = [book1, fictionBook1];

var library1 = new Library(myBooksArray);
library1.addBook(book2);
library1.addBook(fictionBook2);

var radu = new LibraryMember("Radu", library1);

console.log(book1);
console.log(fictionBook1);
console.log(library1);

book1.displayInfo();
fictionBook1.displayInfo();
library1.displayLibrary();

console.log(radu);

radu.borrowBook(book1);
radu.borrowBook(fictionBook1);
radu.displayBorrowedBooks();
