const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
mongoose.connect("mongodb://localhost/restfulAPI", {
  useNewUrlParser: true
});

require('./server/config/mongoose.js');
require('./server/config/routes')(app);

app.listen(8000, function() {
  console.log('Listening on 8000');
})