var express = require('express');
var mongoose = require('mongoose');

var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

app.use(express.static(__dirname + "/client/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + "/client/views");
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');

var router = require('./server/config/routes.js');
router(app);

app.listen(1689, function(){console.log("Listening on port: LBCF ");})