

function doSomething(args:any):string|number|undefined{
    if(typeof args=="string"){
        return ("Data type is " +typeof(args));
    }
    else if(typeof args=="number"){
        return ("Data type is " +typeof(args));
    }
    else {
        console.log("Data type is undefined ",typeof(args));
    }
}

console.log(doSomething("pralhad"))
console.log(doSomething(20))
console.log(doSomething({name:"Akshay", location:"Mumbai"}))

var myFn=():any=>{

    return {
        name:"name",
        age:20,
        created :new Date()
    }
}

//type assertions
var info:any="This is simple data";

var result=<string>info;

console.log(result);

var now:any=new Date()
console.log((<Date>now).getFullYear())
