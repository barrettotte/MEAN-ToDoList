var express = require('express')
var router = express.Router()
var taskController = require('../../controllers/task.controller');

// Map each API to taskController's functions
router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);
router.put('/', taskController.updateTask);
router.delete('/:id', taskController.removeTask);

module.exports = router;