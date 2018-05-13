//server.js

var express = require('express');			//Creates an express application
var app = express();						//app object has methods for routing HTTP requests, configuring middleware, rendering HTML views etc.

var bodyParser = require('body-parser');	//Extracts entire body portion of an incoming request stream and exposes it on req.body
var methodOverride = require('method-override');	//To use a header to override the method, specify the header name as a string argument to the methodOverride function

var port = process.env.PORT || 5000;		//set the environment variable PORT to tell your web server what port to listen on

app.use(bodyParser.json());					//get all data/stuff of the body (POST) parameters. parse application/json 

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));										//The vendor prefix (vnd.) indicates that it is custom for this vendor

app.use(bodyParser.urlencoded({
    extended: true
}));										// parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override'));	//override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

app.use(express.static(__dirname + '/application'));		//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express

app.use(function(req, res, next) {					//The function is executed every time the app receives a request
    res.header("Access-Control-Allow-Origin", "*");	
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./application/db/dbconnect')(app);			//Database configuration

app.listen(port);							//Listen's to specified port. Ex: 5000

console.log('Connect to the application using the port:  ' + port);

exports = module.exports = app;				//Makes express application ("app") available to other files
