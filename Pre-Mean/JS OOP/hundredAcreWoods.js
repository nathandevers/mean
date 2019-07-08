var Eeyore = {
    character: "Eeyore",
      greet: function(){
        console.log("Oh Bother");
    }
};
var Heffalumps = {
    character: "Heffalups",
        greet: function(){
        console.log("Oh Bother");
    }
};
var Kanga = {
    character: "Kanga",
        greet: function(){
        console.log("Oh Bother");
    }
};
var Christopher = {
    character: "Christopher",
    greet: function(){
      console.log("oh Bother")
    }
    };
var Pooh = {
    character: "Pooh",
    greet: function(){
        console.log("Oh Bother");
    }
};
var Tigger = {
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
    }
};
var Owl = {
    character: "Owl",
    greet: function(){
      console.log("Oh Bother");
    }
};
var Piglet = {
    character: "Piglet",
      greet: function(){
        console.log("Oh Bother");
    }
};
var Rabbit = {
    character: "Rabbit",
      greet: function(){
        console.log("Oh Bother");
    }
    };
var Gopher = {
    character: "Gopher",
    greet: function(){
        console.log("Oh Bother");
    }
};
var Bees = {
    character: "Bees",
      greet: function(){
        console.log("Oh Bother");
      pickup(); 
      mission();
      console.log("deliver honey to" + mission.location);
    }
};

Kanga.north = Eeyore;
Kanga.south = Christopher;
Eeyore.east = Heffalumps; 
Heffalumps.west = Eeyore;
Christopher.west = Owl; 
Christopher.east = Rabbit; 
Christopher.south = Pooh; 
Christopher.north = Kanga;
Pooh.north = Christopher;
Pooh.south = Tigger;
Pooh.west = Piglet; 
Pooh.east = Bees; 
Piglet.east = Pooh;
Piglet.north = Owl;
Owl.east = Christopher;
Owl.south = Piglet; 
Tigger.north = Pooh; 
Rabbit.west = Christopher;
Rabbit.east = Gopher; 
Rabbit.south = Bees; 
Gopher.west = Rabbit; 
Bees.north = Rabbit; 
Bees.west = Pooh; 

var player = {
    location : Tigger,
    honey : false,
    pickup: function(){
        if(location === Bees){
            honey = true;
        }  
        else{
            console.log("There is no honey at this location");
        }
    }
    }         
    mission: function(){
        if(honey = true){
            location.random != Bees;
            mission.location = location.random;
            console.log("Deliver honey to" + '' + mission.location);
        }
    };
    drop: function(){
        if (player.location = mission.location)
        console.log('You win');
        honey = false;
    }
};
}

function move(str){
    if (str == "north"){
        player.location = player.location.north;
        player.location.greet();
        console.log("you are now at " + player.location.character + "'s" + " house" );
        
    }
    if (str == "south"){
        player.location = player.location.south;
        player.location.greet();
        console.log("you are now at " + player.location.character + "'s" + " house") ;
    }
    if (str == "east"){
        player.location = player.location.east;
        player.location.greet();
        console.log("you are now at " + player.location.character + "'s" + " house");
    }
    if (str == "west"){
        player.location = player.location.west;
        player.location.greet();
       console.log("you are now at " + player.location.character + "'s" + " house");
    }

        
}


      move('north');
      move('north');

