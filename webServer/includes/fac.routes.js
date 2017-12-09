fac.routes = function() {    
}

fac.routes.prototype.add = function (name,fun){
   var route =  function(){
           fun.apply( this, arguments ); 
        }
    this[name] = route; 
};


