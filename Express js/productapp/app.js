var express=require('express')
var path=require('path')
var mongoose=require('mongoose')

var bodyParser=require('body-parser')

var productRoutes = require('./routes/product')

var app=express()


app.set('port',5000)
app.set('view engine','jade')
app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/product',productRoutes)

mongoose.connect('mongodb://localhost:27017/products1',{useMongoClient:true})

mongoose.connection.on("connected",()=>{
            console.log("Mongodb connection successful :)")
        
})

mongoose.connection.on("error",(err)=>{

    if(err) console.log("Error Occured")
})


app.listen(app.get('port'),function(){
    console.log("Server Running")
})