var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Config
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());

//Database
// mongoose.connect("mongodb://localhost/authors", { useNewUrlParser: true });
// require('./server/config/mongoose.js');

//Routes
// require('./server/config/routes.js')(app);

app.listen(8000, function(){console.log('Port: 8000');});