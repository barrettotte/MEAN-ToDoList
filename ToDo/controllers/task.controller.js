
var taskService = require('../services/task.service');
_this = this;


//GET
exports.getTasks = async function(request, response, next){
	var page = request.query.page ? request.query : 1;
	var limit = request.query.limit ? request.query : 10;

	try{
		var tasks = await taskService.getTasks({}, page, limit);
		return response.status(200).json({status: 200, data: tasks, message: "Successfully retrieved Task."});
	}
	catch(e){
		return response.status(400).json({status: 400, message: e.message});
	}
}


//POST
exports.createTask = async function(request, response, next){
	var task = {
		title: request.body.title,
		description: request.body.description,
		type: request.body.type,
		status: request.body.status
	}
	console.log(task);

	try{
		var createdTask = await taskService.createTask(task);
		return response.status(200).json({status: 201, data: createdTask, message: "Successfully created Task."});
	}
	catch(e){
		return response.status(400).json({status: 400, message: "Controller: " + e.message});
	}
}


//PUT
exports.updateTask = async function(request, response, next){
	var id = request.body._id;

	if(!id){
		return response.status(400).json({status: 400, message: "Could not find ID of Task."});
	}
	console.log(request.body);
	var task = {
		id,
		title: request.body.title ? request.body.title : null,
		description: request.body.description ? request.body.description : null,
		type : request.body.type ? request.body.type : null,
		status : request.body.status ? request.body.status : null
	}

	try{
		var updatedTask = await taskService.updateTask(task);
		return response.status(200).json({status: 200, data: updatedTask, message: "Successfully updated Task."});
	}
	catch(e){
		return response.status(400).json({status: 400, message: e.message});
	}
}


//DELETE
exports.removeTask = async function(request, response, next){
	var id = request.params.id;
	try{
		var deleted = await taskService.deleteTask(id);
		return response.status(200).json({status: 200, message: "Successfully deleted Task."});
	}
	catch(e){
		return response.status(400).json({status: 400, message: e.message})
	}
}