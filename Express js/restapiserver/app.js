var express=require('express')
var taskRoutes=require('./routes/task')
var mongoose=require('mongoose')

var bodyParser=require('body-parser')
var app=express()

app.set('port',4500)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',taskRoutes)


mongoose.connect('mongodb://localhost:27017/lnttodo', { useMongoClient: true })
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