
var mongoose = require('mongoose')
var Schema=mongoose.Schema;

var taskSchema= new Schema({

    taskname:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,required:true},
})

module.exports=mongoose.model('task',taskSchema)