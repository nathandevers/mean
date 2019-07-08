const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
  index: (req, res) => {
    Task.find({}, (err, data) => {
      if(err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  create: (req, res) =>  {
    Task.create(req.body, (err, data) => {
      if(err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  show: (req, res) =>  {
    Task.findOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  update: (req, res) => {
    Task.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  },
  delete: (req, res) =>  {
    Task.remove({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  }
};