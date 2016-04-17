// server.js

// BASE SETUP
// ==========================================================

// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// add models
var Idea = require('./app/models/idea');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/coppia');

// configure app to use bodyParser()
// this will let us get data from a POST
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set out port

// ROUTES for our API
var router = express.Router(); // get instance of the express router

router.use(function(req, res, next) {
    //do logging
    console.log('Something is happening.');
    next();
});

// test to make sure everything is working (access the at GET http:localhost:8080/api)
router.get('/', function(req, res) {
    res.json({message: 'horray! welcome to our api!' });
});

// more routes will be added here

// on routes that end in /idea
router.route('/idea')
  // create an idea (accessed at POST /api/idea)
  .post(function(req, res) {
    var idea = new Idea({
      title: req.param('title'),
      notes: req.param('notes')
    });

    idea.save(function(err) {
      if (err) res.send(err);

      res.json({ message: 'Idea created!'});
    });
  })
  // get all the bears (accessed at GET /api/idea)
  .get(function(req, res) {
    Idea.find(function(err, ideas) {
      if (err)
        res.send(err);

      res.json(ideas);
    });
  });

app.use('/api', router);


app.listen(port);
console.log('Magic happens on port ' + port);
