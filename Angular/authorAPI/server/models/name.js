var mongoose = require("mongoose");

var AuthorSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, "Must Enter A Name"], minlength: [2, "Name must be atleast 2 characters"]},
    last_name: {type: String, required: [true, "Must Enter A Name"], minlength: [2, "Name must be atleast 2 characters"]},
    birthday: {type: Date, required: true, default: Date.now },
    books:{
        title: {type: String, required: [true, "Must Enter A Name"], minlength: [2, "Name must be atleast 2 characters"]},
        publication_year: {type: Date, required: true, default: Date.now },
    }
}, {timestamps:true})

mongoose.model("Author", AuthorSchema)