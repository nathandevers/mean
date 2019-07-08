$(document).ready(function(){
    $("button").mouseover(function(){
        if(this.id == "beach"){
            $("container").css("background-image", "url('dojo_arena_photos-master\beach.jpg')");
        }else if(this.id =="dojo"){
            $("container").css("background-image", "url('dojo_arena_photos-master\dojo.jpg')");
        }else if(this.id == "earth"){
            $("container").css("background-image", "url('dojo_arena_photos-master\earth.jpg')");
        }else if(this.id == "forest"){
            $("container").css("background-image", "url('dojo_arena_photos-master\forest.jpg')");
        }else if(this.id == "matrix"){
            $("container").css("background-image", "url('dojo_arena_photos-master\matrix.jpg')");
        }else if(this.id == "snow"){
            $("container").css("background-image", "url('dojo_arena_photos-master\snow.jpg')");
        }
    })
})