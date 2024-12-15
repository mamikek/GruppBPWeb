// server.js
const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Secret key for JWT
const JWT_SECRET = 'supersecretkey';

// Signup route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password and insert new user
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword]);

    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error signing up' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.rows[0].password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

// PostPage aka the add post function for server
app.post('/home', async (req, res) => {
    try {
      console.log("A post request is arrived");
      const post = req.body;
      const newpost = await pool.query(
        'INSERT INTO posters(title, picture) values ($1, $2) RETURNING*',
        [post.title, post.picture]
        );
        res.json(newpost);
        console.log("A post request is completed");
      } catch(err) {
        console.error(err.message)
      }
  });

  // Load posts at home(mainpage)
app.get('/home', async(req, res) => {
  try {
      console.log("get posts request has arrived");
      const posts = await pool.query(
          "SELECT * FROM posters"
      );
      res.json(posts.rows);
  } catch (err) {
      console.error(err.message);
  }
});

app.get('/api/home/:id', async(req, res) => {
  try {
      console.log("get a post with route parameter request has arrived");
      const { id } = req.params;
      const posts = await pool.query(
          "SELECT * FROM posters WHERE id = $1", [id]
      );
      res.json(posts.rows[0]);
  } catch (err) {
      console.error(err.message);
  }
});

app.put('/api/home/:id', async(req, res) => {
  try {
      const { id } = req.params;
      const post = req.body;
      console.log("update request has arrived");
      const updatepost = await pool.query(
          "UPDATE posters SET (title, picture) = ($2, $3) WHERE id = $1 RETURNING*", [id, post.title, post.picture]
      );
      res.json(updatepost);
  } catch (err) {
      console.error(err.message);
  }
});

app.delete('/api/home/:id', async(req, res) => {
  try {
      const { id } = req.params;
      console.log("delete a post request has arrived");
      const deletepost = await pool.query(
          "DELETE FROM posters WHERE id = $1 RETURNING*", [id]
      );
      res.json(deletepost);
  } catch (err) {
      console.error(err.message);
  }
});

//Listens for the port and needs to be last
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});