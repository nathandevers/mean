users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  
  function userLanguages(users){
    for(var x = 0; x < users.length; x++){
      //for(var i = 0; i < users[x].interests.length; i++){
       // for(var i = 0; i <interests.length; i++){
        console.log(users[x].fname + ' ' + users[x].lname + ' ' + 'knows:' + ' ' + users[x].languages + ' ' );
        console.log(users[x].interests);
        //console.log(users[x].interests{0});
     // }
  
    }
  
  }
  
  userLanguages(users);