var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
require('./server/config/mongoose');
require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(1689, function(){console.log('Listening on port: LBCF')})