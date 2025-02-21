const http = require("http");
const fs = require("fs");

const PORT = 5000;
const DATA_FILE = "books.json";

// Function to read file
const readBooks = () => {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
};

// Function to write file
const writeBooks = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
};

// Create HTTP server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    // GET: Retrieve all books
    if (req.method === "GET" && req.url === "/books") {
        const books = readBooks();
        console.log(books);
        res
        res.end(JSON.stringify(books));
    }
    
    // GET: Retrieve a book by ID
    else if (req.method === "GET" && req.url.startsWith("/books/")) {
        const id = parseInt(req.url.split("/")[2]);
        const books = readBooks();
        const book = books.find(b => b.id === id);

        if (book) res.end(JSON.stringify(book));
        else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "Book not found" }));
        }
    }

    // POST: Add a new book
    else if (req.method === "POST" && req.url === "/books") {
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            const newBook = JSON.parse(body);
            let books = readBooks();
            newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
            books.push(newBook);
            writeBooks(books);
            res.statusCode = 201;
            res.end(JSON.stringify({ message: "Book added", book: newBook }));
        });
    }

    // PUT: Update a book by ID
    else if (req.method === "PUT" && req.url.startsWith("/books/")) {
        const id = parseInt(req.url.split("/")[2]);
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            let books = readBooks();
            const bookIndex = books.findIndex(b => b.id === id);

            if (bookIndex === -1) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ message: "Book not found" }));
            }

            books[bookIndex] = { id, ...JSON.parse(body) };
            writeBooks(books);
            res.end(JSON.stringify({ message: "Book updated", book: books[bookIndex] }));
        });
    }

    // DELETE: Remove a book by ID
    else if (req.method === "DELETE" && req.url.startsWith("/books/")) {
        const id = parseInt(req.url.split("/")[2]);
        let books = readBooks();
        const filteredBooks = books.filter(b => b.id !== id);

        if (books.length === filteredBooks.length) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: "Book not found" }));
        }

        writeBooks(filteredBooks);
        res.end(JSON.stringify({ message: "Book deleted" }));
    }

    // Handle 404 Not Found
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

// Start Server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});