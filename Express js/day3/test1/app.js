//importing
var express = require('express')
var path = require('path')
//instantiate
var app = express();

//configuration
app.set('port', process.env.PORT || 4000)
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))

//middleware

app.use(express.static(path.join(__dirname,'public')))

//rotuing

app.get('/employeedata', function (req, res) {

    res.json({ 'id': 1, 'name': 'pralhad', 'salary': 2000000, 'designation': 'CEO' })

})

app.get('/dashboard', function (req, res) {

    res.set('Content-Type', 'text/html')
    res.status(200)
    res.render('dashboard', { message: 'welcome to dashboard' })
})

app.get('/reports', function (req, res) {

    res.set('Content-Type', 'text/html')
    res.status(200)
    res.render('reports', { message: 'welcome to reports' })
})
app.get('/schedule', function (req, res) {

    res.set('Content-Type', 'text/html')
    res.status(200)
    res.render('schedule', { message: 'welcome to schedule' })
})
app.get('/home', function (req, res) {

    res.set('Content-Type', 'text/html')
    res.status(200)
    res.render('home', { message: 'welcome to home' })
})
app.get('/users/:uname/:pass',function(req,res){

    res.send('username: '+req.params.uname+'<br>'+'password: '+req.params.pass)

})
app.get('/boot_home',function(req,res){
    
        res.render('boot_home',{movies:[{'name':'DDLJ','actor':'SRK'},{'name':'kabali','actor':'rajani'}]})
    
    })

app.use(function (req, res) {
    res.status(404)
    res.render('404',{message:'404:Not found'})
})
//server
app.listen(app.get('port'), function () {

    console.log("server running on port:" + app.get('port'));
})