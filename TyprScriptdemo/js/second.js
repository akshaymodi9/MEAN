"use strict";
function doSomething(args) {
    if (typeof args == "string") {
        return ("Data type is " + typeof (args));
    }
    else if (typeof args == "number") {
        return ("Data type is " + typeof (args));
    }
    else {
        console.log("Data type is undefined ", typeof (args));
    }
}
console.log(doSomething("pralhad"));
console.log(doSomething(20));
console.log(doSomething({ name: "Akshay", location: "Mumbai" }));
var myFn = () => {
    return {
        name: "name",
        age: 20,
        created: new Date()
    };
};
var info = "This is simple data";
var result = info;
console.log(result);
var now = new Date();
console.log(now.getFullYear());
//# sourceMappingURL=second.js.map