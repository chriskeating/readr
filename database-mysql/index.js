var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'remotemysql.com', //'localhost',
  user     : 'KsiYxkIpax',// 'ck',
  password : '9zxmfs5uXL',// 'pw',
  database : 'KsiYxkIpax'// 'Readr'
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error)
  } else {
    console.log("Connected")
  }
});

// var selectAll = function(callback) {
//   connection.query('SELECT * FROM articles', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// module.exports.selectAll = selectAll;

// var mysql = require('mysql');

// // COMMENT OR UNCOMMENT THIS FOR LOCAL DATABASE WORK
//   // var mysqlConnection = mysql.createConnection({
//   //   host: 'localhost',
//   //   user: 'root',
//   //   password: '',
//   //   database: 'valence'
//   // })

//   // mysqlConnection.connect();

//   // module.exports = mysqlConnection;

// // COMMENT OR UNCOMMENT THIS FOR HEROKU DATABASE WORK
//   var  db_config = {
//     host: 'us-cdbr-iron-east-03.cleardb.net',
//     user: 'b75a79c2ce8507',
//     password: 'eda7fc5e',
//     database: 'heroku_fb9a736d7c6266e'
//   }

//   var connection;

//   function handleDisconnect() {
//     connection = mysql.createConnection(db_config); // Recreate the connection, since

//     setInterval(function () {
//       connection.query('SELECT 1');
//     }, 5000);                                                  // the old one cannot be reused.

//     connection.connect(function(err) {              // The server is either down
//       if(err) {                                     // or restarting (takes a while sometimes).
//         console.log('error when connecting to db:', err);
//         setTimeout(handleDisconnect, 2000);         // We introduce a delay before attempting to reconnect,
//       }                                             // to avoid a hot loop, and to allow our node script to
//     });                                             // process asynchronous requests in the meantime.
//                                                     // If you're also serving http, display a 503 error.
//     connection.on('error', function(err) {
//       console.log('db error', err);
//       if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//         handleDisconnect();                         // lost due to either server restart, or a
//       } else {                                      // connnection idle timeout (the wait_timeout
//         throw err;                                  // server variable configures this)
//       }
//     });
//   }

//   handleDisconnect();



  module.exports.connection = connection;
//   // module.exports.handleDisconnect = handleDisconnect();
//   module.exports = connection;
