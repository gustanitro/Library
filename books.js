let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function saveLibrary() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary)) // setItem("Chave", Valor)
}

function loadLibrary() {
    let storedLibrary = localStorage.getItem("myLibrary")
    if (storedLibrary) { // Se há algo em storedLibrary (storedLibrary = true)
        myLibrary = JSON.parse(storedLibrary);
        myLibrary.forEach(book  => renderBook(book));
    }
}

function renderBook(book) {
    let libraryBook = document.querySelector("#library");
    libraryBook.style.display = "flex";

    // let lastBook = myLibrary[myLibrary.length - 1];
    // console.log(lastBook);

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card")

    let bookTitle = document.createElement("h1");
    bookTitle.innerHTML = book.title;
    bookCard.appendChild(bookTitle);

    let bookAuthor = document.createElement("p");
    bookAuthor.innerHTML = "Author: " + book.author;
    bookCard.appendChild(bookAuthor);

    let bookPages = document.createElement("p");
    bookPages.innerHTML = "Pages: " + book.pages;
    bookCard.appendChild(bookPages);

    let isBookRead = document.createElement("p");
    isBookRead.innerHTML = book.read ? "Read" : "Not read";
    bookCard.appendChild(isBookRead);

    libraryBook.appendChild(bookCard);
};

function addBooksToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderBook(newBook);
    saveLibrary();
};

let newBookBtn = document.querySelector("#new_book");
newBookBtn.addEventListener("click", function() {    
    let newBookForm = document.querySelector("#new_book_form");
    newBookForm.style.display = "flex";
});

document.querySelector("#new_book_form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBooksToLibrary();
});

window.onload = loadLibrary();