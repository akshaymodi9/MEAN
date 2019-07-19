


//process info

// console.log(process);

console.log("Process title " +process.title);

console.log("Process version " +process.version);

console.log("Process Platform " +process.platform);

console.log("Process Arch " +process.arch);

//console.log(process.env);

console.log(process.env.LOGNAME);

process.on("beforeExit",function(code){
    console.log("Process is going to exit");   
})

process.on("exit",function(code){

    console.log("Process exietd")
})

process.on("uncaughtException", function(err){

    console.log("Erroorr occccccucred")
});

