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
// db.query('Select * FROM employees', (err, rows) => {
//     console.log(rows);
// });

// get single employee
// db.query(`Select * FROM employees WHERE id= 8`, (err, rows) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(rows);
// });

// Delete a candidate
// db.query(`DELETE FROM employees WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result);
// });

// create a candidate
// const sql = `INSERT INTO employees (id, first_name, last_name, title, department, salary, manager)
//                 VALUES(?,?,?,?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 'Sales Lead', 'Sales', 100000, null];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// function to start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
});