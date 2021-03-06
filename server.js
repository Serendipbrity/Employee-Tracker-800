const { viewEmployees, addEmployee } = require("./employee");
const { viewRoles, addRole } = require("./roles");
const { viewDepartment, addDepartment } = require("./department");

const inquirer = require("inquirer");
const db = require("./db/connection");

const promptUser = () => {
  inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "What would you like to do? (Use arrow keys)",
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Add an Employee",
        "Add a Role",
        "Add a Department",
        "Update an Employee Role",
      ],
    })
    .then((data) => {
      switch (data["options"]) {
        case "View All Employees":
          viewEmployees();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Departments":
          viewDepartment();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Add a Role":
          addRole();
          break;
        case "Add a Department":
          addDepartment();
          break;
        case "Update an Employee Role":
          upRole();
          break;
      }
    });
};

promptUser();

module.exports = promptUser;
