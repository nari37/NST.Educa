const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
app.use(cors());
// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'online_education'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON data
app.use(bodyParser.json());

//  POST request...
app.post('/submit', (req, res) => {
//   const { name, email, number, courses, gender } = req.body;
  const mydata = [req.body.name,req.body.email,req.body.number,req.body.courses,req.body.gender]
  // Insert the data into the MySQL database..
  const sql = 'INSERT INTO users (name, email, number, courses, gender) VALUES (?)';

  
  db.query(sql, [mydata], (err, result) => {
    if (err) {
      console.log('MySQL Error:', err);
     
    } else {
      console.log('Data inserted successfully');
      res.json({ message: 'Data inserted successfully' });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
