// Import required modules
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app and define port
const app = express();
const port = 5000;

// Create MySQL connection
const db = mysql.createConnection({
  user: "root",
  password: "Cricketbest1234",
  database: "AS_Project",
  port: 3306,
  host: "localhost"
});

// Connect to MySQL
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log("MySQL Connected");
});

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Object to store credentials temporarily
let storedCredentials = {
  username: '',
  password: ''
};

// Endpoint to receive and store credentials
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  storedCredentials.username = username;
  storedCredentials.password = password;
  console.log('Received credentials:', storedCredentials); // Log credentials to the console
  res.json({ message: 'Credentials stored successfully!' });

  // Insert new user into the database
  const newUser = { username: username, password: password };
  db.query('INSERT INTO Credentials SET ?', newUser, (err, result) => {
    if (err) throw err;
    console.log('User Added: ', result);
  });
});

// Endpoint to retrieve stored credentials
app.get('/api/credentials', (req, res) => {
  res.json(storedCredentials);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
