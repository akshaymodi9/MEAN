
var express =require('express')
var session=require('express-session')
var path=require('path')
var csurf=require('csurf')
var csurfProtection=csurf({cookie:true})
var app=express()
var bodyParser=require('body-parser')
var parseForm=bodyParser.urlencoded({extended:true})

app.set('view engine','jade')
app.set('views',path.join(__dirname,"views"))
//middleware
var cookieParser=require('cookie-parser')
var session=require('express-session')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session({
    secret:"anything",
    //forces the session to be saved in the store
    //its default value is true
    saveUninitilaized:false,
    //forces the session to be saved back to store even if not saved
    resave:false
}))
// app.use('/',function(req,res){
//     res.send("our first session program")
// })
app.get('/register',csurfProtection,function(req,res){
    res.render('register',{csrfToken:req.csrfToken()})
})

app.post('/process',parseForm,csurfProtection,function(req,res){
    res.send('data processed')
})

app.listen(4000,function(){
    console.log("Server running")
})