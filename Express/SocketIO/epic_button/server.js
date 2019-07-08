const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



const server = app.listen(1689);
const io = require('socket.io')(server);

var count = 0;

io.on('connection', function(socket){
    socket.on("button_click", function(data){
        count++;
        io.emit("update_count", {count: count})
    });
    socket.on("reset", function(data){
        count = 0;
        io.emit("update_count", {count: count})
    });
});



app.get('/', function(req, res) {
    res.render('index');
  })