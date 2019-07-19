var EventEmitter=require('events')
var fs = require('fs');

class FileManager extends EventEmitter {

    constructor(file) {
        super();
        this.filename = file;
    }

    write(data, callback) {
        this.emit('start','write')

        fs.writeFile(this.filename, data, "utf8", (err) => {
            if (err) {
                callback(err);
                this.emit('end','write',0)
            }
            console.log("Written into file");
            this.emit('end','write',1)
            callback();
        })
    }
    read(callback) {
        this.emit('start','read')

        fs.readFile(this.filename, (err, data) => {

            if (err) {
                callback(err, undefined);
                this.emit('end','read',0)
            }
            callback(undefined, data.toString());
            this.emit('end','read',1)
        })
    }
}


module.exports=FileManager;