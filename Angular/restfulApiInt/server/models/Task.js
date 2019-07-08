const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: String,
  description: { type: String, default: '' },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

// collection named tasks
mongoose.model("Task", TaskSchema); 