module.exports = function(mongoose,db){
    
    var Schema = mongoose.Schema;

    var o = {};
    var server = new Schema({
        ip: String,
        name: String
    });

    var mod = mongoose.model('server',server  );

    o.new = function(ip,name){
       var r = new mod();
       if(ip)  { r.ip   = ip};
       if(name){ r.name = name};
       return r;
    };

    o.find = function(filter,callBack){
        mod.find(filter,callBack);
    };

    o.populate = function populateServers(){
        var server0 = o.new();
        	server0.ip = '192.168.100.100';
	        server0.name = 'lucy';
            server0.save();
      /*  var server1 = o.new();
	        server1.ip = '192.168.100.1';
	        server1.name = 'router'; 
            server1.save();
        var server2 = o.new();
	        server2.ip = '192.168.100.113';
        	server2.name = 'iphone'; 
            server2.save();
        */
        console.log('populate done');
    };

    return o;
    
};

