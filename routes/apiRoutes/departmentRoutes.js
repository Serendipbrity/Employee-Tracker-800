const express = require("express");
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');


const getAllDep = () => {
  // Get all departments
  router.get('/department', (req, res) => {
    const sql = `SELECT * FROM department`;
  
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
}  

// Get a single department
router.get('/department/:id', (req, res) => {
    const sql = `SELECT * FROM department WHERE id = ?`;
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
  

const addDep = () => {
  // create a department
  router.post('/department', ({ body }, res) => {
    const errors = inputCheck(body,
      'names'
    );
    if (errors) {
      res.status(400).json({ error: errors });
    }
    const sql = `INSERT INTO roles (names)
    VALUES (?,?,?,?,?,?)`
    const params = [body.names];

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
};


  // Delete a department
  router.delete('/department/:id', (req, res) => {
    const sql = `DELETE FROM department WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.statusMessage(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Department not found'
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

  module.exports = {
    getAllDep, addDep
  }

module.exports = router;