var fs=require('fs')
var path=require('path')

var filePath=path.resolve(__dirname,"../package.json")
var buff=new Buffer(20000)

fs.open(filePath,"r",function(err,fileHandler){
 
    if(err){
        console.log("Unable to open file")
        return;
    }
    
    fs.read(fileHandler,//fileHandler
        buff,//buffer
        0,//starting index of buffer
        buff.length,
        null,//reading position
        function(error,bytesRead,buffer){
        if(error){
            console.log("error")
            return;
        }
        var content=buff.toString("utf8",0,bytesRead);
        console.log(content)

        fs.close(fileHandler,function(err,result){
            if(err){
                console.log("error")
                return
            }
        })

    })
})


var data=fs.openSync(filePath,"r");
if(!data){
    console.log("Error")
}
else{
    var data1=fs.readSync(data,buff,0,buff.length,null)

    if(!data1)
        {
            console.log("Error")
        }
        else{
            var content=buff.toString("utf8",0,data1);
            console.log(content)
    
            fs.closeSync(data)
        }
}