var mongoose = require('mongoose')
var schema=mongoose.Schema;

var userSchema= new schema({
    
        username:{type:String,required:true},
        password:{type:String,required:true},
        role:{type:String,required:true},
        authkey:{type:String,required:true}
    })

module.exports=mongoose.model('user',userSchema)