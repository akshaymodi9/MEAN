//importing
var express = require('express')
var mongoose = require('mongoose')
//importing routes
var indexRoutes = require('./route/index')
var taskRoutes = require('./route/task')
var path=require('path')
var bodyParser=require('body-parser')


//Instantiate
var app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/lnttodo', { useMongoClient: true })
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB on port 27017 :)")
})
mongoose.connection.on("error", (err) => {
    if (err)
        console.log("Connection failed :( " + err)
})



//configuration
app.set('port', 5000)
app.set('view engine','jade')
app.set('views',path.join(__dirname,'views'))

//define route
app.use('/', indexRoutes)
app.use('/task', taskRoutes)
app.use(express.static(path.join(__dirname,'public')))


//server

app.listen(app.get('port'), function () {
    console.log("Todo app running on port: " + app.get('port'))
})