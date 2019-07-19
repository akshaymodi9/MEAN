
var fs=require('fs')
var path=require('path')

var message="This is sample text";

var file=path.resolve(__dirname,"../data.txt")
/*

fs.writeFile(file,message,"utf8",function(err){
    if(err){
        console.log("Unable to write")
    }
})*/

//sync write
try{
fs.writeFileSync(file,message,"utf8")
}
catch(err)
{
console.log("error")
}