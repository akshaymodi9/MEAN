"use strict";
function myFunction(flag) {
    var num = 24;
    if (flag) {
        var num = 456;
        console.log("value of num = " + num);
    }
    console.log("value of num= " + num);
}
myFunction(true);
function myFunction1(flag) {
    let num1 = 24;
    if (flag) {
        let num1 = 456;
        console.log("value of num = " + num1);
    }
    console.log("value of num= " + num1);
}
myFunction1(true);
//# sourceMappingURL=third.js.map