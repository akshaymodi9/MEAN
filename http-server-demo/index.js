
var http=require('http')

var requestHandler=require('./request-handler')

var server=http.createServer();

server.on("request",requestHandler);

    

server.listen(3005,function(err){

    if(err){
        console.log("failed to start server")
        return;
    }

    console.log("server started At http://localhost:3005")
})