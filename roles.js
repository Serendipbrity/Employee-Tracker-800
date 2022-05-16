const { promptUser } = require("./server");
const inquirer = require("inquirer");
const db = require("./db/connection");
const mysql = require("mysql2");

const sql = `SELECT * FROM roles`;

// view all roles
function viewRoles() {
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
  });
  // promptUser()
}

// add a role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of the new role?",
      },
      {
        type: "list",
        name: "department",
        message: "Which department will they be in?",
        choices: ["Engineering", "Finance", "Legal", "Sales"],
      },
      {
        type: "number",
        name: "salary",
        message: "What is their salary?(Use no commas)",
      },
      {
        type: "list",
        name: "d_id",
        message: "What is their department id?",
        choices: [1, 2, 3, 4],
      },
    ])
    // insert data into each column
    .then((data) => {
      db.query(
        `INSERT INTO roles ( title, department, salary, d_id)
            VALUES (?,?,?,?)`,
        (params = [data.title, data.department, data.salary, data.d_id])
      ),
        db.query(sql, (err, rows) => {
          if (err) throw err;
          console.log("Role Added!");
          console.table(rows);
        });
    });
}

// function upRole() {
//      let fullName = db.query(SELECT CONCAT(first_name," ",last_name) AS fullName)
//         inquirer.prompt([
//             {
//                 type: 'list',
//                 name: 'empChoice',
//                 message: 'Which employees role would you like to update?',
//                 choices: fullName
//             },
//             {
//                 type: 'list',
//                 name: 'title',
//                 message: 'Which role would you like to update to?',
//                 choices: ['Salesperson', 'Sales Lead', 'Software Engineer', 'Lead Engineer', 'Accountant', 'Account Manager', 'Lawyer', 'Legal Team Lead']
//             }
//         ])
//             .then((data) => {
//             db.query('UPDATE employees SET title = ? WHERE first_name = ? AND last_name = ?',
//                 params = [data.first_name, data.last_name, data.title]),
//                 db.query(sql, (err, rows) => {
//                     if (err) throw err;
//                     console.log('Role Updated!');
//                   console.table(rows);
//                 });
//             })

// }

// export functions so they can be used in server for prompts and organizing
module.exports = { viewRoles, addRole };
