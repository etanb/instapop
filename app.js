// Loads all Bootstrap javascripts
//= require bootstrap
var express = require('express'),
   app = express();

var request = require('request');

// var apiToken = process.env.INSTAGRAM_TOKEN;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/isthisworking', function (req, res) {
	res.render('home.ejs');
});

var server = app.listen(3000, function() {
   console.log('Listening on port %d', server.address().port);
});