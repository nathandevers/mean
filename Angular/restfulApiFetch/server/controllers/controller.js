const Task = require('./../models/models.js');
module.exports = {
    index:(req, res)=>{
        Task.find({})
        .then(data=>console.log('List all tasks from DB') || res.json({task:data}))
        .catch(errs=>console.log('Errors')||res.json(errs))
    },
    createTask:(req, res)=>{
        Task.create(req.body)
        .then(data=>console.log('Successfully created task!')|| res.json({task:data}))
        .catch(errs=>console.log('Errors')||res.json(errs))
    },
    getTask:(req, res)=>{
        Task.findById({_id:req.params.id})
        .then(data=>console.log('Successfully found a task!')|| res.json({task:data}))
        .catch(errs=>console.log('Errors: Do not find a task')||res.json(errs))
    },
    updateTask:(req,res)=>{
        Task.findByIdAndUpdate({_id:req.params.id},{$set : req.body})
        .then(data=>console.log('Successfully updated a task!')|| res.json({task:data}))
        .catch(errs=>console.log('Errors: Do not find a task')||res.json(errs))
    },
    deleteTask:(req,res)=>{
        Task.findByIdAndDelete({_id:req.params.id})
        .then(data=>console.log('Successfully deleted a task!')|| res.json({task:data}))
        .catch(errs=>console.log('Errors: Do not find a task')||res.json(errs))
    }
}
