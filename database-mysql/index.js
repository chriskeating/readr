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

connection.on('error', function(err) {
  console.log(err.code);
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error)
  } else {
    connection.on('error', function(err) {
      console.log(err.code);
    });
  }
});

module.exports.connection = connection;