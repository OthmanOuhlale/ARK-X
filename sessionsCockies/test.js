const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

// Server Variable Structure
const users = [
  {
    id: 1,
    username: 'alice',
    password: '$2b$10$IBefhR2DqNWSp8tI3V1VruFyJ73ORF1m5hbk5w7GbAx4JpP6gB47u', // hashed password for 'password123'
  }
];

// Registration Endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10); // Hash password
  users.push({ username, password: hashedPassword });
  res.send('Registration successful');
});

// Login Endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = username;
    res.cookie('session_id', req.session.id, { httpOnly: true }); // Set session cookie
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Protected Route
app.get('/protected', (req, res) => {
  if (req.session.user) {
    res.send('Welcome to the protected route');
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Logout Endpoint
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('session_id'); // Clear session cookie
  res.send('Logout successful');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
