var express = require('express')
var path = require('path')

var app = express()

app.set('port', process.env.PORT || 5000)
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', function (req, res) {

    res.render('home', { 'message': 'This is home' })
})

app.get('/contactus', function (req, res) {

    res.render('contactus', { 'message': 'This is home' })
})

app.get('/viewcustomer', function (req, res) {

    res.render('viewcustomer', { details: [{ 'name': 'ashwini', 'address': 'powai', 'mobile': 123465789, 'amt_of_trans': 123456, 'credit': '123xxx1453' }, { 'name': 'anuja', 'address': 'thane', 'mobile': 123465789, 'amt_of_trans': 123786, 'credit': '123xxx1445' }, { 'name': 'Guruji', 'address': 'mahape', 'mobile': 12345789, 'amt_of_trans': 1237786, 'credit': '123xxx1453' }] })
})


app.get('/viewproduct', function (req, res) {

    res.render('viewproduct', { details: [{ 'name': 'Note 7', 'cost': 20000, 'category': 'Mobile', 'brand': 'Samsung', 'avail': 200 }, { 'name': 'Pixel', 'cost': 20000, 'category': 'Mobile', 'brand': 'Google', 'avail': 100 }, { 'name': 'Sony Bravia', 'cost': 2000045, 'category': 'Television', 'brand': 'Sony', 'avail': 50 }] })
})


app.get('/vieworder', function (req, res) {

    res.render('vieworder', { details: [{ 'oid': 1, 'pid': 2, 'date': '29 OCt 2017', 'amount': 123546, 'name': 'ashwini' }, { 'oid': 2, 'pid': 4, 'date': '29 dec 2017', 'amount': 54546, 'name': 'anuja' }] })
})

app.get('/register', function (req, res) {
    
        res.render('register')
})


app.listen(app.get('port'), function () {
    console.log("Server running");
})