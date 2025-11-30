class Library {
    constructor() {
        this.books = [];
    }

    // Method to add a new book
    addBook(title, author, available) {
        const newBook = { title, author, available };
        this.books.push(newBook);
    }

    // Method to get all available books using filter()
    getAvailableBooks() {
        return this.books.filter(book => book.available === true);
    }

    // Method to search for a book by author using find()
    searchByAuthor(author) {
        return this.books.find(book => book.author === author);
    }
}

// ---------------------------
// Demonstration
// ---------------------------

const myLibrary = new Library();

// Creating 3 books
myLibrary.addBook("The Alchemist", "Paulo Coelho", true);
myLibrary.addBook("A Brief History of Time", "Stephen Hawking", false);
myLibrary.addBook("1984", "George Orwell", true);

// Showing all available books
console.log("Available Books:");
console.log(myLibrary.getAvailableBooks());

// Searching for a book by author
console.log("\nSearching for books by 'George Orwell':");
console.log(myLibrary.searchByAuthor("George Orwell"));
