const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'SecretIsASecret',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
	res.render("index");
});

var color = "";


var server = app.listen(1689, () => {
	console.log("listening on port 1689");
});
var io = require("socket.io").listen(server);
io.on("connection", function(socket){
    console.log("Connected!");
    socket.emit("launch", {
        bgc : color,
    });
    socket.broadcast.emit("launch", {
        bgc : color,
    });

    socket.on("green_push", function(){
        socket.emit("green_bg");
        socket.broadcast.emit("green_bg");
        color = "green";
    });
    socket.on("blue_push", function(){
        socket.emit("blue_bg");
        socket.broadcast.emit("blue_bg");
        color = "blue";
    });
    socket.on("pink_push", function(){
        socket.emit("pink_bg");
        socket.broadcast.emit("pink_bg");
        color = "pink";
    });
});

//Routes
app.get("/", function(req, res){
    console.log("~Root~");
    res.render("index");
});
