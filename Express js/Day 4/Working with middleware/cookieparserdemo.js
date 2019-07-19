//import dependencies

var express=require('express')
var app=express();

app.set('port',4500);

//third party middleware
// cookie parser: use to generate a cookie
// install cookie parser : npm install cookie-parser
//import it
//use it

var cookieParser=require('cookie-parser')

app.use(cookieParser())

app.get('/',function(req,res){

    res.cookie('myCookie','cricket videos');
    res.send('Hello world')
})

app.get('/removecookie',function(req,res){
    res.clearCookie('myCookie');
    res.send('Cookie Cleared XD')

})
app.listen(app.get('port'),function(){

    console.log("server started")
})