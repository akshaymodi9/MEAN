//step 1: Importing dependicies

var express=require('express');
var path=require('path');

//step 2:Instantiation express
var app=express();

//step 3:Configuration
//3.1 setting port
app.set('port',process.env.PORT || 4000)
//3.2 Setting view engine and view folder
app.set('view engine','jade');
app.set('views',path.join(__dirname,'views'));
//3.3 Application name
app.set('applicationName','Movie app');
//3.4 env variable
app.set('env','development')
app.set('strict routing',true)
app.enable('case sensitive routing')


//step 5: Define routes


app.get('/',function(req,res){

    res.render('index',{user:'username',dateoflogin:new Date()})
})

//step 6:create web server
app.listen(app.get('port'),function(){
    console.log('Server is running on port: '+app.get('port'));
    console.log('Application is using engine: '+app.get('view engine'));
    console.log('path of jade template : '+app.get('views'));
    console.log("application name: "+app.get('applicationName'));
    console.log('type of hosting:'+app.get('env'))
})