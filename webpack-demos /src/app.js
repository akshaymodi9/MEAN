var greeter=require('./scripts/greeter')
var calc=require('./scripts/calc')
var css=require('./css/mystyles.css')

function doSomething(){
    console.log("Hello ")
    console.log("This is second line")
    console.log("This is more ")
}

doSomething()
console.log(calc.add(5,6))
greeter.sayGoodMorning("Mumbai")