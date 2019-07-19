


var express=require('express')
var path=require('path')
var fs=require('fs')

var app=express();
var morgan=require('morgan')


app.set('port',4500);

app.use(morgan('combined'))

app.use(morgan({

    stream:fs.createWriteStream('app.log',{flags:'a'})
}))

app.get('/loggerdemo',function(req,res){

    res.send("Welcome")
})
app.listen(app.get('port'),function(){

    console.log("server started")
})