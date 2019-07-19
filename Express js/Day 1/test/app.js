//install dependicies
var express=require('express')
var path=require('path')

//Instantiate
var app=express();

//configuration

app.set('port',process.env.PORT ||4000)

app.set('view engine','jade')

app.set('views',path.join(__dirname,'views'))

app.set('applicationName','Shopping cart')

//define route
app.get('/home',function(req,res){

    res.render('home',{appname:app.get('applicationName')})
})

app.get('/contactus',function(req,res){
    
        res.render('contactus',{mob:'720845612',address:'navi mumbai',appname:app.get('applicationName')})
    })

app.get('/productdetails',function(req,res){

    res.render('productdetails',{appname:app.get('applicationName'),id:'1',name:'iphone',cost:'2500',category:'electronics',description:'Apples iphone 6'})
})

app.get('/aboutus',function(req,res){
    
        res.render('aboutus',{appname:app.get('applicationName')})
    })

    //create server

    app.listen(app.get('port'),function(){
        console.log("Server running");
    })