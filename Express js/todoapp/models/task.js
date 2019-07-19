
var mongoose = require('mongoose')
var Schema=mongoose.Schema;

var taskSchema= new Schema({

    taskname:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,required:true},
})

module.exports=mongoose.model('task',taskSchema)

// var mongoose=require('mongoose')


// var reviewSchema=new schema({
//   name:{type:String,required:true},
//   rating:{type:Number,required:true,min:1,max:5},
//   date_of_review:{type:Date},
//   comments:{type:String}

// })

// var movieschema = new schema({

// 	title:{type:String,required:true,unique:true},
//     year:{type:String,required:true},
//     runtime:{type:String,required:true},
//     genre:[{type:String,required:true}],
//     actors:[{type:String,required:true}],
//     directors:[{type:String,required:true}],
//     writers:[String],
//     music:[String],
//     singers:[String],
//     description:{type:String},
//     language:[String],
//     awards:[String],
//     poster:{type:String,required:true},
//     trailer:{type:String,required:true},
//     production:{type:String,required:true},
//     reviews:{
//         type:[reviewSchema]
//     }






// })