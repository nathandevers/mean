const TasksCtrl = require('./../controllers/TasksCtrl.js');

module.exports = (app) => {
  // get all tasks
  app.get('/tasks', TasksCtrl.index);
  // create a task
  app.post('/tasks', TasksCtrl.create);
  // get one task
  app.get('/tasks/:id', TasksCtrl.show);
  // update a task
  app.put('/tasks/:id', TasksCtrl.update);
  // delete a task
  app.delete("/tasks/:id", TasksCtrl.delete);

}