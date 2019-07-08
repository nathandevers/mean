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

session.nickname = {};
var letters = {};
//session.prevdata = {};

var server = app.listen(1689, () => {
	console.log("listening on port 1689");
});
var io = require("socket.io").listen(server);


io.sockets.on('connection', (socket)=> {
	console.log("Client/socket is connected!");
	console.log("Client/socket id is: ", socket.id);

	socket.on("enter_new_chatter", (data)=>{
		session.nickname[socket.id] = data;
		socket.broadcast.emit("new_chatter", data);
		//session.letter[socket.id] = data;
		//session.prevdata[socket.id] = data;
		//socket.emit(data);
		//var user_info = {
		//	name : session.nickname[socket.id],
		//	letter : data[0].value,
		//};
		//socket.emit("good_letter", user_info);
		//socket.emit("good_letter", user_info);
		//socket.emit("good_letter", data.name, data.letter);
		//socket.emit(data.name, data.letter);
		socket.emit('existing_letter', letters);
		socket.emit("welcome", data);
		

	});
	socket.on("new_letter", (data)=>{
		console.log(data);
		if(data[0].value == ""){
			let err = {error:"Please type something"};
			socket.emit("message_error", err);
		}
		else{
			let user_info = {
				name : session.nickname[socket.id],
				letter : data[0].value,
			}
			io.emit("good_letter", user_info);
		}
	});
});
