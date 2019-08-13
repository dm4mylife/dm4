 
var fs = require('fs');
 
class ReadStreamSync {
    constructor (fileName) {
        this.__handler = fs.openSync(fileName, 'r');
    }
 
    read(bytes) {
        let buf = Buffer.alloc(bytes);
        let bytesReaded = fs.readSync(this.__handler, buf, 0, bytes);
       
        if (bytesReaded === 0) {
            return null;
        } else if (bytes > bytesReaded) {
            return buf.slice(0, bytesReaded);
        } else if (bytes === bytesReaded) {
            return buf;
        } else {
            return null;
        }
    }
 
    close() {
        fs.closeSync(this.__handler);
    }
}
 
function createReadStream(path) {
    return new ReadStreamSync(path);
}
 
module.exports.createReadStream = createReadStream;