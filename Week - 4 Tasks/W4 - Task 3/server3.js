import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 5000;
const JWT_SECRET = "mySecretKey"; 

app.use(express.json());

// ======= Sample Data ========
let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
];

// Sample user data (username, password, role)
let users = [
  { username: "UserAdmin", password: "admin123", role: "admin" },
  { username: "UserClient", password: "client123", role: "client" }
];

// ======== Middleware: Role-Based Access ========
const checkRole = (req, res, next) => {
  const role = req.headers.role;
  if (!role || (role !== "admin")) {
    return res.status(403).json({ message: "Access denied. Only admins can perform this action." });
  }
  next();
};

// ======== Middleware: JWT Authentication ========
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user; // Add user info to req object
    next();
  });
};

// ======== Signup ========
app.post("/signup", (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: "Username, password, and role are required" });
  }

  const userExists = users.find((u) => u.username === username);
  if (userExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ username, password, role });
  res.status(201).json({ message: "User registered successfully" });
});

// ======== Signin ========
app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const payload = { username: user.username, role: user.role };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ message: "Signin successful", token });
});

// ======== Protected Routes (GET books — needs JWT auth) ========
app.get("/books", authenticateToken, (req, res) => {
  res.status(200).json(books);
});

// ======== CRUD APIs (POST/PUT/DELETE protected by role) ========
app.post("/books", authenticateToken, checkRole, (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newBook = { id: books.length + 1, title, author, year };
  books.push(newBook);
  res.status(201).json({ message: "Book added successfully", book: newBook });
});

app.put("/books/:id", authenticateToken, checkRole, (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, year } = req.body;
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books[bookIndex] = { id: bookId, title, author, year };
  res.status(200).json({ message: "Book updated successfully", book: books[bookIndex] });
});

app.delete("/books/:id", authenticateToken, checkRole, (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(bookIndex, 1);
  res.status(200).json({ message: "Book deleted successfully" });
});

// ======== Start Server ========
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
