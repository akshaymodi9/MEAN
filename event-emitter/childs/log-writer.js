var fs=require('fs');

function writeToFile(data){

    fs.writeFile("data1.txt", data, function(err){
        process.send("Write operation completed");
    })
}

process.on("message", function(message){

    writeToFile(message);
})