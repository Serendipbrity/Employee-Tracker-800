const { promptUser } = require('./server')
const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql2');


const sql = `SELECT * FROM department`;

// view all departments
function viewDepartment() {

  
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
    // promptUser()
};

// add a department
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the new department?',
            }
        ])
        // insert data into each column
        .then((data) => {
            db.query(`INSERT INTO department (name)
            VALUES (?)`,
                params = [ data.name]),
 
                db.query(sql, (err, rows) => {
                    if (err) throw err;
                    console.log('Department Added!');
                  console.table(rows);
                });  
        })
};
  // export functions so they can be used in server for prompts and organizing
module.exports = { viewDepartment, addDepartment }