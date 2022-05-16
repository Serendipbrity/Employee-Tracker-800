const { promptUser } = require('./server')
const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql2');


const sql = `SELECT * FROM employees`;

// view all employees
function viewEmployees() {

    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
    // promptUser()
};

function addEmployee() {
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
                name: 'title',
                message: 'What is your employees role?',
                choices: ['Salesperson', 'Sales Lead', 'Software Engineer', 'Lead Engineer', 'Accountant', 'Account Manager', 'Lawyer', 'Legal Team Lead']
            },
            {
                type: 'list',
                name: 'department',
                message: 'Which department will they be in?',
                choices: ['Engineering', 'Finance', 'Legal', 'Sales']
            },
            {
                type: 'number',
                name: 'salary',
                message: 'What is their salary?(Use no commas)'
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Who is their manager?',
                choices: ['John Doe', 'Ashley Rodriguez', 'Kunal Singh', 'Sarah Lourd', 'null']
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'What is their role id?',
                choices: [1,2,3,4]
            }
        ])
        .then((data) => {
            db.query(`INSERT INTO employees (first_name, last_name, title, department, salary, manager, role_id)
            VALUES (?,?,?,?,?,?,?)`,
                params = [data.first_name, data.last_name, data.title, data.department, data.salary, data.manager, data.role_id]),
 
                db.query(sql, (err, rows) => {
                    if (err) throw err;
                  console.log('Employee Added!');
                  console.table(rows);
                });  
        })
};


  // 
module.exports = { viewEmployees, addEmployee }