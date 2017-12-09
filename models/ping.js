module.exports = function(mongoose,db){
    
    var Schema = mongoose.Schema;

    var o = {};
    var ping = new Schema({
        ip: String,
        name: String,
        pingTime : Date, 
        pingStatus : String
    });

    var mod = mongoose.model('ping',ping);

    o.new = function(ip,name,pingTime,pingStatus){
       var r = new mod();
       if(ip)  { r.ip   = ip};
       if(name){ r.name = name};
       if(pingTime){ r.pingTime = pingTime};
       if(pingStatus){ r.pingStatus = pingStatus};

       return r;
    };

    o.find = function(filter,callBack){
        mod.find(filter,callBack);
    };

    o.getLast = function(_ip,callback){
       mod.find({ip:_ip}).sort({"pingTime":-1}).limit(1).execFind(callback);
    };
    o.getLast40 = function(callback){
       mod.find({}).sort({"pingTime":-1}).limit(40).execFind(callback);
    };
    return o;
    
};

