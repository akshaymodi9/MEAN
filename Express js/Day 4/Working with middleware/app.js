


var express=require('express')
var path=require('path')

var app=express();

app.set('port',4500);

app.use(function(req,res,next){

    console.log('Log in terminal Date : %sM Md: %s, URL: %s',( new Date()).toString(), req.method, req.url);
    next();
})

app.listen(app.get('port'),function(){

    console.log("server started")
})