
var company: String = "LNT"
var place: String = "Mumbai"
var today: Date
var data: any

today = new Date()

function test() {
    var name: String = "test";
    console.log("Name is " + name)
}

test()

data = {

    name: "akshay",
    age: 20
}
function testData(d: any): void {

    console.log("Data is " , d)
}

testData(data);

testData("Good")

function testName(name: String): void {

    console.log("Name is " + name)
}

testName("Pralhad");

function getData(string1:any):String{
    return "Input data is "+string1;
   // return 10;
}

getData("Hello")

var point:[number,number]

point=[10,20];

console.log("X= "+point[0])
console.log("Y= "+point[1])

enum Days{
Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
}


let day=Days.Tuesday;
console.log(day)
enum Department{
    HR=123456,
    IT=246746,
    ACCOUNTS=574357,
    PAYROLL=5743543
}
let dept=Department.PAYROLL
console.log(dept)

