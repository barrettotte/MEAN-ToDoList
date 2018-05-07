
var taskModel = require('../models/task.model');
_this = this;


//GET
exports.getTasks = async function(query, page, limit){
    //Mongoose paginate options
    var options = {
        page,
        limit
    }
    try{
        var tasks = await taskModel.paginate(query, options);
        return tasks;
    }
    catch(e){
        throw Error('Error while generating pagination for task.');
    }
}


//POST
exports.createTask = async function(task){
    var newTask = new taskModel({
        title: task.title,
        description: task.description,
        date: new Date(),
        type: task.type,
        status: task.status
    });

    try{
        var savedTask = await newTask.save();
        return savedTask;
    }
    catch(e){
        throw Error('Error while creating task.');
    }
}


//PUT
exports.updateTask = async function(task){
    var id = task.id;
    try{
        var oldTask = await taskModel.find({_id: id});
    }
    catch(e){
        throw Error('Error while finding task.');
    }

    //If old task does not exist, return false
    if(!oldTask){
        return false;
    }
    try{
        var savedTask = await taskModel.update(
            { _id: id }, 
            { 
                title: task.title,
                description: task.description,
                type: task.type,
                status: task.status
            },
            { upsert: true }
        );
        return savedTask;
    }
    catch(e){
        throw Error('Error while updating task.');
    }
}


//DELETE
exports.deleteTask = async function(id){
    try{
        var deleted = await taskModel.remove({_id: id});
        if(!deleted){
            throw Error('task could not be deleted.');
        }
        return deleted;
    }
    catch(e){
        throw Error('Error while deleting task.');
    }
}