
const express = require('express');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');

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



// Get all employees
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

// Get a single employee
app.get('/api/employee/:id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });

// Delete an employee
app.delete('/api/employee/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });
// create an employee
app.post('/api/employee', ({ body }, res) => {
    const errors = inputCheck(body,
        'first_name',
        'last_name',
        'title',
        'department',
        'salary',
        'manager'
    );
    if (errors) {
        res.status(400).json({ error: errors });
    }
    const sql = `INSERT INTO employees (first_name, last_name, title, department, salary,manager)
    VALUES (?,?,?,?,?,?)`
    const params = [body.first_name, body.last_name, body.title, body.department, body.salary, body.manager];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// function to start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
});