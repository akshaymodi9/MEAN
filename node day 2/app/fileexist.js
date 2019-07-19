

var fs=require('fs');
var path=require('path');

var file=path.resolve(__dirname, "../data5.txt")
/*
fs.exists(file, function(flag){

    if(!flag){
        console.log("Error");
    }else{
        fs.watchFile(file,{interval:2500},function(current,previous){
            console.log(current)
            console.log(previous)
            
        })
    }
})*/

fs.stat(file,function(err,stats){
   
    console.log(stats)
    
})