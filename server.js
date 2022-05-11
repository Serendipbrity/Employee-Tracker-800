const mysql = require('mysql2');

const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        // your mysql username,
        user: 'root',
        // your mysql password
        password: 'C0de4me23*',
        database: 'emp_tracker'
    },
    console.log('Connected to the emp_tracker database.')
);

// db object using query method and executes a callback with all resulting rows matching query
db.query('Select * FROM employees', (err, rows) => {
    console.log(rows);
});

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// function to start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
});