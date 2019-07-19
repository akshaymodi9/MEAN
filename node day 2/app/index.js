
var calc=require('prahlad-calc');
var path=require('path');

/*
console.log(__dirname);
console.log(__filename)

global.author = "Pralhad";
global.place = "Mumbai";

console.log(global["author"]);
console.log(global["place"]);*/


//without require (incorrect ans)
//var indexPath=__dirname + "/index.html";

var indexPath=path.resolve(__dirname,"../index.html");
console.log(indexPath)

console.log(path.dirname(indexPath));
console.log(path.basename(indexPath))
console.log(path.extname(indexPath))

var indexFile="..//index.html"
console.log(path.normalize(indexFile))

/*
calc.add(5,3,function(res){

    console.log(res)
})*/
var print=function(msg){
    console.log(msg)
}

calc.add(5,8,print);