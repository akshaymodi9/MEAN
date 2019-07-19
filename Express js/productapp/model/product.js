var mongoose=require('mongoose')

var schema=mongoose.Schema;

var productSchema=new schema({

    name:{type:String, required:true},
    cost:{type:Number,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true}
})

module.exports=mongoose.model('products',productSchema)