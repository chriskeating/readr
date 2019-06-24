var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'remotemysql.com',
  // host     : 'localhost',
  user     : 'uUU7YFAJk3',
  // user     : 'KsiYxkIpax',
  // user     : 'ck',
  password : 'PLlV0GsU6Q',
  // password : '9zxmfs5uXL',
  // password : 'pw',
  database : 'uUU7YFAJk3'
  // database : 'KsiYxkIpax'
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