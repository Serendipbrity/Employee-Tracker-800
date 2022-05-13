const inquirer = require('inquirer');

const express = require('express');

const db = require('./db/connection');
// import input check file/module
const inputCheck = require('./utils/inputCheck');


// variable to use express
const app = express();
//import routes
const apiRoutes = require('./routes/apiRoutes');
// what port to use
const PORT = process.env.PORT || 3002;



// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// use apiRoutes
app.use('/api', apiRoutes);

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  // function to start express.js server on port 3001
  app.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
  });
});

const { getAllEmp, addEmp } = require('./routes/apiRoutes/employeeRoutes');
const { getAllDep, addDep } = require('./routes/apiRoutes/departmentRoutes');
const { addRole, upRole } = require('./routes/apiRoutes/roleRoutes');

const promptUser = () => {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'to do options',
                message: 'What would you like to do? (Use arrow keys)',
                choices: ['View All Employees',
                    'View All Roles',
                    'View All Departments',
                    'Add an Employee',
                    'Add a Role',
                    'Add a Department',
                    'Update an Employee Role']
            })
        .then((data) => {
            switch (data['to do options']) {
                case 'View All Employees':
                    getAllEmp();
                    break;
                case 'View All Roles':
                    getAllRoles();
                    break;
                case 'View All Departments':
                    getAllDep();
                    break;
                case 'Add an Employee':
                    addEmp();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add a Department':
                    addDep();
                    break;
                case 'Update an Employee Role':
                    upRole();
                    break;
            }
    })
    
}


module.exports = { promptUser } 



promptUser()
