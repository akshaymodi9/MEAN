
var a=[]

var processArray = function (arr) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i].length > 5) {
            a.push(arr[i]);
        }

    }

    return console.log(a);
}

var arr1=["Akshay", "Demos1", "prahlad", "adssad", "sad", "sdasdas"]
processArray(arr1);
