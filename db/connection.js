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

db.connect(function (err) {
    if (err) throw err;
    console.log('Database connected!');
  });


module.exports = db;