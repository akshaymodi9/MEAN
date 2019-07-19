


var express=require('express')
var path=require('path')


var responseTime=require('response-time')
var app=express();

app.set('port',4500);

app.use(express.static(path.join(__dirname,'public')))

app.use(responseTime())

app.get('/restime',function(req,res){

    setTimeout(function() {

        res.status(200).end();
        
    },513);
})

app.listen(app.get('port'),function(){

    console.log("server started")
})