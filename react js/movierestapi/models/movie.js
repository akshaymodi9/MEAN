var mongoose=require('mongoose')
var schema=mongoose.Schema

var reviewSchema=new schema({
    reviewer_name:{type:String},
    rating:{type:Number,min:1,max:5},
    dateof_review:{type:Date},
    comments:{type:String}
})

var movieSchema=new schema({
    title:{type:String,required:true,unique:true},
    year:{type:String,required:true},
    runtime:{type:String,required:true},
    genre:{type:Array},
    actors:{type:Array},    
    directors:{type:Array},
    writers:{type:Array,required:false},
    music:{type:Array,required:false},
    singers:{type:Array,required:false},
    description:{type:String,required:true},
    language:{type:Array,required:false},
    awards:{type:Array,required:false},
    poster:{type:String,required:true},
    trailer:{type:String,required:true},
    production:{type:String},
    reviews:[reviewSchema]
})

module.exports=mongoose.model('movie',movieSchema)