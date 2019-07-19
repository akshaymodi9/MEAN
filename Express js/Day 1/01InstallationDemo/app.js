
//step 1: import dependencies

var express = require('express');

//step 2: Instantiate Express

var app = express();

// step 5: define routes


app.get('/product/:productname', function (request, response) {

    response.status(200);
    response.set('content-type', 'text/html')
    response.send('<html><head></head><body>' + request.params.productname + '</body></html>');
})

app.get('/contactus', function (request, response) {
    response.status(200);
    response.set('content-type', 'text/html')
    response.send('<html><head></head><body>  Welcome to contact us page </body></html>');

})

app.get('/', function (request, response) {

    response.end("welcome to express");
})

//stpe 6: create server

app.listen(3000, function () {

    console.log('server Running on port : 3000')
})