"use strict";
var company = "LNT";
var place = "Mumbai";
var today;
var data;
today = new Date();
function test() {
    var name = "test";
    console.log("Name is " + name);
}
test();
data = {
    name: "akshay",
    age: 20
};
function testData(d) {
    console.log("Data is ", d);
}
testData(data);
testData("Good");
function testName(name) {
    console.log("Name is " + name);
}
testName("Pralhad");
function getData(string1) {
    return "Input data is " + string1;
}
getData("Hello");
var point;
point = [10, 20];
console.log("X= " + point[0]);
console.log("Y= " + point[1]);
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
let day = Days.Tuesday;
console.log(day);
var Department;
(function (Department) {
    Department[Department["HR"] = 123456] = "HR";
    Department[Department["IT"] = 246746] = "IT";
    Department[Department["ACCOUNTS"] = 574357] = "ACCOUNTS";
    Department[Department["PAYROLL"] = 5743543] = "PAYROLL";
})(Department || (Department = {}));
let dept = Department.PAYROLL;
console.log(dept);
//# sourceMappingURL=first.js.map