//step 1: Importing dependicies

var express=require('express');
var path=require('path');

//step 2:Instantiation express
var app=express();

//step 3:Configuration
//3.1 setting port
app.set('port',process.env.PORT || 4000)



// starting server

app.get('/user/:role/:name', function(req,res){

    console.log('user role is: '+ req.params.role + ' ' +req.params.role)
    res.send('user role is : '+ req.params.role + " " +req.params.name)
})

app.set('port',4500)
app.listen(app.get('port'),function(){

    console.log('Server running')
})