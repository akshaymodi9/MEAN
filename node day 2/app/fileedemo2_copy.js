

var fs = require('fs');
var path = require('path');

var filePath = path.resolve(__dirname, "../index.html");
var buff = new Buffer(200000);

var openFile = fs.openSync(filePath, "r")
{
    if (!filePath) {
        console.log("File not found");
        return;
    }
    else {
        var readFile = fs.readSync(openFile, buff, 0, buff.length, null);

            var content= buff.toString("utf8",0,readFile);
        console.log(content);

        fs.closeSync(openFile);
    }
}


