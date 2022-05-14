const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql2');


// view all employees
function viewEmployees() {
    const sql = `SELECT * FROM employees`;
  
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
};

function addEmployee() {
    const sql = `INSERT INTO employees (first_name, last_name, title, department, salary,manager)
            VALUES (?,?,?,?,?,?)`
            params = [data.first_name, data.last_name, data.title, data.department, data.salary, data.manager, role_id]
    db.query(sql, params, (err, rows) => {
        if (err) throw err;
       
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'first_name',
                message: 'What is you employees first name?'
            },
            {
                type: 'text',
                name: 'last_name',
                message: 'What is your employees last name?'
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'What is your employees role?',
                choices: ['Salesperson','Sales Lead', 'Software Engineer', 'Lead Engineer','Accountant','Account Manager','Lawyer','Legal Team Lead']
            },
        ])
   
        console.table(rows);
    });
    };
  
module.exports = { viewEmployees, addEmployee }