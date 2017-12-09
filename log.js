
var log = function(){};
    log.writeLine = function (str){
            console.log(str);
        };
    log.wl = log.writeLine;
    log.write = function(str){
        process.stdout.write(str);
        };
    log.w = log.write; 
module.exports = log;

