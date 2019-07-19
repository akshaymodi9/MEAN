var fs=require('fs')
var path=require('path')


var message="This is sample"
var file=path.resolve(__dirname,"../data1.txt")

fs.open(file,"a",function(err,fileHandle){
    if(err)
        {
            console.log("Error")
            return;
        }

        var buffer=new Buffer(message);
        fs.write(fileHandle,buffer,0,buffer.length,null,function(error,bytesWrote,buffer){
            if(error)
                {
                    console.log("ERror")
                    return;
                }

                fs.close(fileHandle,function(err){
                    if(err){
                        console.log("Error")
                    }
                })
        })
})