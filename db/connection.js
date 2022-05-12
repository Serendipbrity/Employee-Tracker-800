const mysql = require('mysql2');

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


module.exports = db;