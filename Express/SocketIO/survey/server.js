var express = require('express');
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(1689);
var io = require('socket.io')(server);
io.on('connection', function (socket) { //2
	socket.on("posting_form", function (data){
    socket.emit('updated_message', {
    	response: "You emitted the following information to the server: ",
    	info: data
    	});
    socket.emit("random_number", {
    	response: "Your lucky number emitted by the server is ",
    	numb: Math.floor(Math.random()*1001)
        });
	});
    
});
app.get('/', function(req, res) {
    res.render('index');
  })


   
