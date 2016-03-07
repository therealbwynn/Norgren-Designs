// server.js

// modules
// =============================================================================
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var morgan = require('morgan');

// connection
// =============================================================================
// config files
var db = require("./config/db");

// set port
var port = process.env.port || 8080;

// connect to db
mongoose.connect(db.database);

// get console responses
app.use(morgan('dev'));

// set data types using body-parser
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride("X-HTTP-Method-Override"));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes
// =============================================================================
require("./routes")(app);

// start app
// =============================================================================
app.listen(port);

console.log("Server running on port " + port);

exports = module.exports = app;