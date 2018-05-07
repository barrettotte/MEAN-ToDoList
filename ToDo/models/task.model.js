var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String,
    //enum: ['Game Development', 'Self Study', 'Everyday Life', 'Work', 'Misc']
    type: String
})

taskSchema.plugin(mongoosePaginate)
const task = mongoose.model('Task', taskSchema)

module.exports = task;