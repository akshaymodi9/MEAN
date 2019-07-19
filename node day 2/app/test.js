var fs = require('fs');
var path = require('path');

// 

// var details = function (fname, lname, course, scores) {

//     this.fname = fname;
//     this.lname = lname;
//     this.course = course;
//     this.scores = scores;

// }

//console.log(data1);
var jsonFunction = function (file, data1,callback) {
    //var file = path.resolve(__dirname, "../json.txt")

    var data = JSON.stringify(data1);

    try{
        fs.writeFileSync(file,data);
    }
    catch(err)
    {
        callback("error");
    }
    // fs.writeFile(file, data, "utf8", function (err) {
    //     if (err) {
    //         callback("Some Error");
    //         return;
    //     }
    // })
}


module.exports.jsonFunction=jsonFunction;