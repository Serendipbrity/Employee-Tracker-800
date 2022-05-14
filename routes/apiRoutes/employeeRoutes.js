const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');
const mysql = require('mysql2');
const { promptUser } = require('../../server')



// Get a single employee
router.get('/employee/:id', (req, res) => {
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
  
const upEmp = () => {
  // Update an employee
  router.put('/employee/:id', (req, res) => {
    const errors = inputCheck(req.body, 'role_id');
  
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    const sql = `UPDATE employees SET role_id = ? 
                 WHERE id = ?`;
    const params = [req.body.party_id, req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        // check if a record was found
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });
};

const addEmp = () => {
  // create an employee
  // router.post('/employee', ({ body }, res) => {
  //   const errors = inputCheck(body,
  //     'first_name',
  //     'last_name',
  //     'title',
  //     'department',
  //     'salary',
  //     'manager'
  //   );
  //   if (errors) {
  //     res.status(400).json({ error: errors });
  //   }
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
      console.table(result);

      promptUser();
    });
 
};



  // Delete an employee
router.delete('/employee/:id', (req, res) => {
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




