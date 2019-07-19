
var EventEmitter=require('events')

class MyEventEmitter extends EventEmitter{


}

// var evEmitter = new MyEventEmitter();

// evEmitter.on("myclick",(caller, time)=>{

//     console.log(`Myclick Event raised by ${caller} at ${time}`);

// })


var evEmitter = new MyEventEmitter();

evEmitter.on("myclick",(...args)=>{

    console.log(`Myclick Event raised by ${args[0]} at ${args[1]}`);

})


evEmitter.emit("myclick", "Pralhad", new Date());

evEmitter.emit("myclick", "Modi", new Date(2017,06,15));