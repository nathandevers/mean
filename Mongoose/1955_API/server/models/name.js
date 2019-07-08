var mongoose = require("mongoose");

var NameSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
}, {timestamps:true})

mongoose.model("Name", NameSchema)