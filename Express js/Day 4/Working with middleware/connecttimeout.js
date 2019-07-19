


var express=require('express')
var path=require('path')
var timeout=require('connect-timeout')

var app=express();

app.set('port',4500);

app.use(express.static(path.join(__dirname,'public')))

app.get('/slowtimeout',timeout('1s'),function(req,res,next){


    setTimeout(function(){
        if(req.timedout) return false;
        return next();
    },999+Math.round(Math.random()))
},

function(req,res) {


    res.send("ok")        
    }
)

app.listen(app.get('port'),function(){

    console.log("server started")
})