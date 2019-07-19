var fs = require('fs');
var path = require('path');

var jf = require('./test')

var data1 ={fname:"pralhad", lname:"Yadav", course:["mongo", "dbms"], scores:[50, 60, 70]};

var file = path.resolve(__dirname, "../abc.json")
console.log(file)

jf.jsonFunction(file, data1,function(err){
    if(err){
        console.log("Errror");
    }

})

var details = fs.readFileSync(file, "utf8");

console.log(details)

if (!details) {
    console.log("File not found")
    return;
}
else {
    var data = JSON.parse(details);

    var sum = 0;
    for (var i of data.scores) {
        sum += i;
    }

}

console.log(sum)