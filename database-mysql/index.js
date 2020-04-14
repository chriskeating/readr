var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'remotemysql.com',
  // host     : 'localhost',
  user     : 'IC5BAdfBIp',
  // user     : 'ck',
  password : 'p6VhULppby',
  // password : 'pw',
  database : 'IC5BAdfBIp'
  // database : 'Readr'
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error)
  } else {
    console.log("Connected")
  }
});

module.exports.connection = connection;