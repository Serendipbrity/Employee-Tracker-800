const db = require('./db/connection');


function viewRoles() {
    const sql = `SELECT * FROM roles`;
  
    db.query(sql, (err, rows) => {
      if (err) throw err;
      console.table(rows);
    });
}
  
module.exports = viewRoles;