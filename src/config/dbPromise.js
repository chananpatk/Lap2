const mysql = require('mysql2/promise');
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '713'
});

module.exports = pool; 