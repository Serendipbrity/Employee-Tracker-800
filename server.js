// import express package
const express = require('express');
//import connection module
const db = require('./db/connection');
// import input check file/module
const inputCheck = require('./utils/inputCheck');

//import routes
const apiRoutes = require('./routes/apiRoutes');
// what port to use
const PORT = process.env.PORT || 3002;
// variable to use express
const app = express();
// use apiRoutes
app.use('/api', apiRoutes);

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



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