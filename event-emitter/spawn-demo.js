var child_process = require('child_process')

var spawn = child_process.spawn;

for (var i = 0; i <= 3; i++) {

    var child_task = spawn("node", ["index2.js"]);

    child_task.stdout.on("data", function (data) {
        console.log(data.toString());
    });

    child_task.stderr.on("data", function (data) {
        console.log(data.toString());
    });

    child_task.stdout.on("close", function (code, signal) {
        console.log("Child process completed with code " + code);
    })

}