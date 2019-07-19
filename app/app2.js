
// callback functions


function printOddEven(num, oddCallback, evenCallback) {

    if (num % 2 == 0) {

        evenCallback(num)
        //console.log("Even Number:" + num)
    } else {
        oddCallback(num)
        //console.log("Odd Number:" + num)
    }
}

var oddCallback = function (num, err) {

    console.log("you sent odd no" + num);
}

var evenCallback = function (num, err) {

    console.log("I got even no " + num);
}

for (var i = 0; i < 20; i++) {

    printOddEven(i, oddCallback, evenCallback);
}