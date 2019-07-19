
//exporting functions from another files


var cal=require('./app4');

var divHandler = function (data, err) {
    
        if (err) {
            return console.log("This is error" );
    
        }
        else {
            console.log("REsult is " + data)
        }
    }
    
    cal.divide(5, 3, divHandler);
    cal.addition(5, 7,divHandler);

