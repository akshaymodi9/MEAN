var express=require('express')
var movieRoutes=require('./routes/movie')
var userRoutes=require('./routes/user')
var mongoose=require('mongoose')
var bodyParser=require('body-parser')



var app=express()

app.set('port',4000)

app.use(function(req,res,next){
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept")
    res.header("Access-control-Allow-Methods","PUT,POST,GET,DELETE")
    next()

})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api',movieRoutes)
app.use('/api/users',userRoutes)



mongoose.connect('mongodb://localhost:27017/lntmovie', { useMongoClient: true })
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB on port 27017 :)")
})
mongoose.connection.on("error", (err) => {
    if (err)
        console.log("Connection failed :( " + err)
})

app.listen(app.get('port'),function(req,res,next){
    console.log("Rest api server running :)")
})