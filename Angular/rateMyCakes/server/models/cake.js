var mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    
    rating: {type: Number, required: true},
    comment: {type: String, default: "", required: true},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

var CakeSchema = new mongoose.Schema({
    baker: {type: String, default: "", required: true} ,
    cuisine: {type: String, default: "", required: true},
    ratings: [RatingSchema]
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

mongoose.model("Rating", RatingSchema);
mongoose.model("Cake", CakeSchema);