// This is the Database connection program //
const mysql = require('mysql');

const connection = mysql.createConnection({
    debug: false,
    host: '127.0.0.1',
    port: 3306,
    database: 'mvonblan_cs355fl20',
    user: 'mvonblan_cs355fl20',
    password: 'vo7615745'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database Connection Successful");
});

module.exports = connection;