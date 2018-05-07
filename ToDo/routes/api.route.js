var express = require('express')
var router = express.Router()
var toDoList = require('./api/toDoList.route')

router.use('/ToDoList', toDoList);

module.exports = router;