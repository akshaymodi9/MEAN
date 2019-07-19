
// 1. installing dependicies

var express=require('express')
var path=require('path')

//2.Instiation
var app=express();

//3. Configuration
app.set('view engine','jade')

app.set('views',path.join(__dirname,'views'));

app.set('port',4000);


//4. Using Middleware  ....express.static
// 'use' method is applied
app.use(express.static(path.join(__dirname,'public')))




// global error handler




//5. Routes
app.get("/some", function(req, res) {
    // Generate Error yourself.
    throw new Error("Generated Error.");
})
app.use(function(err, req, res, next) {
    console.log(err);
  
    // Your Error Status code and message here.
    res.status(500)
    res.send('Internal server error!');
});

app.get('/plain',function(req,res){

    res.set('Content-Type','text/plain');
    res.send('<h> Welcome to Day 2</h>');
})

app.get('/html', function(req,res){

    res.set('Content-Type','text/html')
    res.send('<h> Welcome to Day 2</h>');
  

})

app.get('/json', function(req,res){
    
        res.json({username:"Pralhad"})
    })
    
app.get('/renderdemo',function(req,res){

    res.render('index',{title:"Day 2 Express"});
})

app.get('/locals',function(req,res){

    res.locals={title:"Movie Application"}
    res.render('index')
})

//serving error pages
app.use(function(req,res){
    res.status(404)
    res.render('404',{title:'404 Error',message:'Page under construction'})
})

// 6. Server
app.listen(app.get('port'),function(){
    console.log('Server is running on: '+app.get('port'));
})