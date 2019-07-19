 

 var fs=require('fs');
 var path=require('path');

 var filePath=path.resolve(__dirname, "../abc.json");
/*
 //async reading
 fs.readFile(filePath, "utf8", function(err,data){

if(err){
    console.log("Error in reading file");
    return;
}

//console.log(data);
 
var content = JSON.parse(data);
console.log(content.name)
console.log(content.version)
}
)*/

//sync read
var data=fs.readFileSync(filePath,"utf-8");
if (!data){
    console.log("Error")

}
else{
    var content = JSON.parse(data);
    console.log(content.fname)
    console.log(content.lname)
    
}

//read file using open and close

