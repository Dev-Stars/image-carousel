const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '784533',
  database: 'yelp',
});

connection.connect();

module.exports = connection.query;
