// const TasksCtrl = require('./../controllers/TasksCtrl.js');

// module.exports = (app) => {
//   // get all tasks
//   app.get('/tasks', TasksCtrl.index);
//   // create a task
//   app.post('/tasks', TasksCtrl.create);
//   // get one task
//   app.get('/tasks/:id', TasksCtrl.show);
//   // update a task
//   app.put('/tasks/:id', TasksCtrl.update);
//   // delete a task
//   app.delete("/tasks/:id", TasksCtrl.delete);

// }
const bp = require('body-parser');
// const controller = require('./controller');
const controller = require('./../controllers/controller.js');
module.exports = function(app){
    app.use(bp.json());
    app.get('/tasks',controller.index);
    app.post('/tasks', controller.createTask);
    app.put('/tasks/:id', controller.updateTask);
    app.delete('/tasks/:id',controller.deleteTask);
    app.get('/tasks/:id',controller.getTask);
    return app;
}