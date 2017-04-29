var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.post('/items/import', function (req, res) {
  request({url: `http://api.brewerydb.com/v2/?styleId=12&key=d8e2e00a81a4cc72656632058b00860d&format=json`, 
    headers: {'HTTP_ACCEPT': 'application/json'}, 
    json: true}, 
    function (error, response, data) {
      // if (error) {return console.log('error is', error)}
      // console.log('error', error);
      // console.log('response', response);
      console.log('data', data);
  });
  res.send('200');
});

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
  res.send('')
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

