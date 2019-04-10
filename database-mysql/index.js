var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'remotemysql.com',
  // host     : 'localhost',
  user     : 'KsiYxkIpax',
  // user     : 'ck',
  password : '9zxmfs5uXL',
  // password : 'pw',
  database : 'KsiYxkIpax'
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