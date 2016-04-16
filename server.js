

// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/');


// configure app to use bodyParser()
// this will let us get data from a POST
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set out port

var router = express.Router(); // get instance of the express router

// test to make sure everything is working (access the at GET http:localhost:8080/api)
router.get('/', function(req, res) {
    res.json({message: 'horray! welcome to our api!' });
});

// more routes will be added here

app.use('/api', router);


app.listen(port);
console.log('Magic happens on port ' + port);
