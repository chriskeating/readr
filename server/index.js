var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var imports = require('../database-mysql/index.js'); //formerly items

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../react-client/dist')); 

// UNCOMMENT FOR REACT

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


/*
app.post('/link', function (req, res) {
  var link = req.body.link
  request({url: `http://api.brewerydb.com/v2/styles?key=d8e2e00a81a4cc72656632058b00860d&styleId=${typeId}`, 
    headers: {'HTTP_ACCEPT': 'application/json'}, 
    json: true}, 
    function (error, response, data) {
      if (error) {return console.log('error is', error)}
      // console.log('data', data);
      var abvRange = data.data.abvMin + ' - ' + data.data.abvMax;
      var ibuRange = data.data.ibuMin + ' - ' + data.data.ibuMax;
      var obj = new items.Item({
        'name': data.data.name,
        'abv': abvRange,
        'ibu': ibuRange,
        'description': data.data.description
      })
      items.query(   
      `SELECT id FROM users
       WHERE username = '${query}'`
      , function(err, results) {
        if (err) {
          console.log('queries.js: getUserId function failed', err);
        } else {
          callback(results);
        }
      })
      // console.log('obj', obj) 
      // obj.save(function (err, obj) {
      //   if (err) {return console.log('The error is ', err)
      //   } else {console.log('Saved!') }
      // })
  });
  res.send('Submitted');
}); */

app.get('/links', function (req, res) {
  // stuff here
  imports.connection.query("SELECT * FROM Articles", function (error, rows, fields) {
    if (!!error) {
      console.log("query error")
    } else {
      console.log("successful query");
      res.send(rows)
    }
  })
})

app.post('/addlink',function(req,res){
    var link = req.body.articleLink;
    var title = req.body.articleTitle;
    var poster = req.body.articlePoster;
    // console.log('link is ' + link + '; title is ' + title + '; poster is ' + poster);
    // var new = "var sql = "INSERT INTO articles (`title`, `link`, `poster`) VALUES ('" + link + "', '" + title + "', '" + poster + "')";"
    var sql = "INSERT INTO articles (`title`, `link`, `poster`) VALUES ('" + link + "', '" + title + "', '" + poster + "')";
    imports.connection.query(sql, function (err, result) {
      if (err) {throw err;}
      console.log('successful post 1')
    });
});

// app.post ('/link', function (req, res) {
//   var query = "Insert into links (title, link, poster) VALUES ('Hacker News', 'https://news.ycombinator.com', 'Chris')"
// })
//
// app.get('/items', function (req, res) {
//   items.Item.find(function (err, beers) {
//     if (err) {console.log('err', err)} 
//     else {console.log(beers)}
//     res.send(beers)
//   })
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
  
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

