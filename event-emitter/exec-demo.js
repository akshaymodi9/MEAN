var child_process = require('child_process')

var exec = child_process.exec;

exec("node -v", function (err, stdout, stderr) {
    console.log(stdout)
})


exec("ls", function (err, stdout, stderr) {
    console.log(stdout)
})


// exec("code /home/ltiuser",function(err,stdout,stderr){
//     console.log(stdout)
// })


// exec("code /home/ltiuser/downloads",function(err,stdout,stderr){
//     console.log(stdout)
// })

for (var i = 1; i <= 5; i++) {

    var child_task=exec("node index2.js", function (err, stdout, stderr) {

        if (err) {

            console.log(err.signal);
            console.log(err.code);
            return;
        }
        console.log(stdout)
    })


child_task.on("exit", function(code){

    console.log("child process exititng with status code " +code);
})
}