var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql/index.js');
// var items = require('../database-mongo');

var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 

// UNCOMMENT FOR REACT

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.post('/items/import', function (req, res) {
  var typeId = parseInt(req.body.styleId)
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
});

app.get('/items', function (req, res) {
  items.Item.find(function (err, beers) {
    if (err) {console.log('err', err)} 
    else {console.log(beers)}
    res.send(beers)
  })
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
  
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

