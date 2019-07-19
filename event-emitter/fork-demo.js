var path = require('path');
var child_process=require('child_process')

var fork=child_process.fork;

var logWriterPath = path.resolve(__dirname, "childs/log-writer.js");
var consolWriterPath = path.resolve(__dirname, "childs/console-writer.js");

var logProcess = fork(logWriterPath);
var consolProcess = fork(consolWriterPath);

logProcess.on("message", function (msg) {

    console.log("From log process: " + msg);
})

consolProcess.on("message", function (msg) {

    console.log("From consol process: " + msg);
})

logProcess.send("Hello log process");
consolProcess.send("Hello consol process");