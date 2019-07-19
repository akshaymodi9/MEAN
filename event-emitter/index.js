
var path=require("path")

var FileManager=require('./FileManager');

var file=path.resolve(__dirname, "data.txt")

var fm=new FileManager(file)


fm.on('start',(taskname)=>{

    console.log(`${taskname} started at ${new Date()}`);
})

fm.on('end',(taskname,num)=>{
    
    if(num==1){
        console.log(`${taskname} completed successfully at ${new Date()}`);

    }
    else{
        console.log(`${taskname} completed unsuccessfully ar ${new Date()}`);
    }
})
fm.write("Some sampple data", (err)=>{

    if(err){

        console.log("Error occured");
    }

    fm.read((err,data)=>{

        if(err){
            console.log("error in reading")
            return
        }
        console.log(data)
    })
})
