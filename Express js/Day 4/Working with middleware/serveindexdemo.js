
var express=require('express')
var path=require('path')
var serveIndex=require('serve-index')

var app=express();

app.set('port',4500);

app.use('/shared',serveIndex(path.join('public','shared'),{icons:true}));

app.listen(app.get('port'),function(){

    console.log("server started")
})