const pool = require('../config/db');

const Test = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM tbl_test');
    return rows;
  },
}

module.exports = Test;