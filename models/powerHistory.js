module.exports = function(mongoose,db){
    
    var Schema = mongoose.Schema;

    var o = {};
    var powerHistory = new Schema({
        state: String,
        stateDate : Date
    });

    var mod = mongoose.model('powerHistory',powerHistory);

    o.new = function(state,stateDate){
       var r = new mod();
       if(state)    { r.state     = state};
       if(stateDate){ r.stateDate = stateDate};

       return r;
    };

    o.find = function(filter,callBack){
        mod.find(filter,callBack);
    };

    o.getLast = function(_ip,callback){
       mod.find({}).sort({"stateDate":-1}).limit(1).exec(callback);
    };
    o.getLast40 = function(callback){
       mod.find({}).sort({"stateDate":-1}).limit(40).exec(callback);
    };
    return o;
    
};


