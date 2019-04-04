var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var imports = require('../database-mysql/index.js');
var app = express();
var port = process.env.PORT || 3000;
var stringify = require('json-stringify-safe');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../react-client/dist')); 

app.get('/links/sports', function (req, res) {
  imports.connection.query("SELECT * FROM articles WHERE category = 'sports'", function (error, rows, fields) {
    if (!!error) {
      console.log("QUERY ERROR: " + error)
    } else {
      console.log("GET Success");
      res.send(rows)
    }
  })
})

app.get('/links/politics', function (req, res) {
  imports.connection.query("SELECT * FROM articles WHERE category = 'politics'", function (error, rows, fields) {
    if (!!error) {
      console.log("QUERY ERROR: " + error)
    } else {
      console.log("GET Success");
      res.send(rows)
    }
  })
})

app.get('/links', function (req, res) {
  imports.connection.query("SELECT * FROM articles", function (error, rows, fields) {
    if (!!error) {
      console.log("QUERY ERROR: " + error)
    } else {
      console.log("GET Success");
      res.send(rows)
    }
  })
})

app.post('/addlink',function(req,res){
    var link = req.body.articleLink.replace(/'/g,"\'");
    var title = req.body.articleTitle.replace(/'/g,"\'");
    var poster = req.body.articlePoster.replace(/'/g,"\'");
    var category = req.body.articleCategory.replace(/'/g,"\'");
    var description = req.body.articleDescription.replace(/'/g,"\'");
    // console.log('link is ' + link + '; title is ' + title + '; poster is ' + poster);
    // var new = "var sql = "INSERT INTO articles (`title`, `link`, `poster`) VALUES ('" + link + "', '" + title + "', '" + poster + "')";"
    var sql = "INSERT INTO articles (`title`, `link`, `username`, `category`, `description`) VALUES ('" + title + "', '" + link + "', '" + poster + "', '" + category + "', '" + description + "')";
    imports.connection.query(sql, function (err, result) {
      if (err) {
        console.log('QUERY ERROR: ' + err);
        throw err;
      }
      // console.log('POST Success')
    });
});

app.post('/addupvote',function(req,res){
    var articleId = req.body.articleId;
    var increment = req.body.increment;
    // console.log('req is ' + JSON.stringify(req));
    console.log(stringify(req.body));
    // var new = "var sql = "INSERT INTO articles (`title`, `link`, `poster`) VALUES ('" + link + "', '" + title + "', '" + poster + "')";"
    var sql = "UPDATE articles SET upvotes = upvotes + 1 WHERE id = '" + articleId + "'";
    imports.connection.query(sql, function (err, result) {
      if (err) {
        console.log('QUERY ERROR: ' + err);
        throw err;
      }
      // console.log('POST Success, increment by 1');
      res.send("Affected rows: " + JSON.stringify(result.affectedRows))
    });
});

app.post('/adddownvote',function(req,res){
    var articleId = req.body.articleId;
    var increment = req.body.increment;
    // console.log('req is ' + JSON.stringify(req));
    console.log(stringify(req.body));
    // var new = "var sql = "INSERT INTO articles (`title`, `link`, `poster`) VALUES ('" + link + "', '" + title + "', '" + poster + "')";"
    var sql = "UPDATE articles SET downvotes = downvotes + 1 WHERE id = '" + articleId + "'";
    imports.connection.query(sql, function (err, result) {
      if (err) {
        console.log('QUERY ERROR: ' + err);
        throw err;
      }
      // console.log('POST Success, increment by 1');
      res.send("Affected rows: " + JSON.stringify(result.affectedRows))
    });
});

app.listen(port, function() { //3000
  console.log('listening on port ' + port + '!');
});