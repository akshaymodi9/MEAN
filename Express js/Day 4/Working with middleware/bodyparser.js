


var express=require('express')
var path=require('path')


var bodyParser=require('body-parser')
var app=express();

app.set('port',4500);

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/',function(req,res){
    res.end(JSON.stringify(req.body))
})

app.listen(app.get('port'),function(){

    console.log("server started")
})