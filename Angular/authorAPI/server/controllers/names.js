const mongoose = require('mongoose');
const Author = mongoose.model('Author');

class AuthorsController {
	index(req, res) {
		Author.find({}, (err, Authors) => {
			if(err){return res.json(err);}
			return res.json(Authors);})
	}
	create(req, res) {
        console.log(req.body)
		Author.create(req.body, (err, Author) => {
			if(err){return res.json(err);}
			return res.json(Author);})
	}
	show(req, res){
		Author.findById(req.params.id, (err, Author) => {
			if(err){return res.json({ error: '404 - Author not found' });}
		    return res.json(Author);})
	}
	update(req, res) {
		Author.findByIdAndUpdate(req.params.id, { $set : req.body }, { new: true }, (err, Author) => {
			if(err){return res.json(err);}
			return res.json(Author);})
	}
	destroy(req, res){
		Author.findByIdAndRemove(req.params.id, (err, Author) => {
			if(err){return res.json(err);}
			return res.json({'success': 'successfully deleted Author'});})
	}
}
module.exports = new AuthorsController();