const mongoose = require('mongoose');
const Task = mongoose.model('Task');

class TasksController {
	index(req, res) {
		Task.find({}, (err, tasks) => {
			if(err){return res.json(err);}
			return res.json(tasks);})
	}
	create(req, res) {
        console.log(req.body)
		Task.create(req.body, (err, task) => {
			if(err){return res.json(err);}
			return res.json(task);})
	}
	show(req, res){
		Task.findById(req.params.id, (err, task) => {
			if(err){return res.json({ error: '404 - Task not found' });}
		    return res.json(task);})
	}
	update(req, res) {
		Task.findByIdAndUpdate(req.params.id, { $set : req.body }, { new: true }, (err, task) => {
			if(err){return res.json(err);}
			return res.json(task);})
	}
	destroy(req, res){
		Task.findByIdAndRemove(req.params.id, (err, task) => {
			if(err){return res.json(err);}
			return res.json({'success': 'successfully deleted task'});})
	}
}
module.exports = new TasksController();