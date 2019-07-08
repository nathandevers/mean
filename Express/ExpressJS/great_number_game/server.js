var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

  var random = Math.floor(Math.random() * 101);

  app.get("/", function(req, res){
      
      if(!req.session.guess){
          var context = {
              status: "hidden",
              msg: "",
              showForm: "hidden"
          }
      }
      else{
          if(req.session.guess > random){
              var context = {
                  status: "block red",
                  msg: "Too High!",
                  showForm: "hidden"	
              }
          }
  
          else if(req.session.guess < random){
              var context = {
                  status: "block red",
                  msg: "Too low!",
                  showForm: "hidden"
              }
          }
          else{
              var context = {
                  status: "block green",
                  msg: "You guessed the number!",
                  showForm: "show"
              }
          }
      }
  
      res.render("index", {context: context});
  })
  
  app.post("/guess", function(req, res){
      req.session.guess = req.body.aGuess;
      res.redirect("/");
  })
  
  app.post("/reset", function(req, res){
      random = Math.floor(Math.random() * 101);
      req.session.guess = undefined;
      res.redirect("/");
  })

   app.listen(1689, function() {
    console.log("listening on port 1689");
   });