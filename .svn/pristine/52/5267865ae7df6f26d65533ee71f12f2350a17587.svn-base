var app = function (){
    var o = {};
    
    o.notify = function(){
        //appevents
    };

    o.ctrls = new Array();

    o.routes = new fac.routes; 


    function init(){
        o.powerHistory = new fac.ctrl.powerHistory('#d_powerHistory');
        o.ctrls.push(o.powerHistory);
       
        var cb = function (){o.powerHistory.routes.render()}; 
        o.powerHistory.routes.init(cb);
       

        o.powerHistoryDay = new fac.ctrl.powerHistoryDay('#d_ping');
        o.ctrls.push(o.powerHistoryDay);
       
        
        var upd_Day = function(){
            var cb2 = function (){o.powerHistoryDay.routes.render()}; 
            o.powerHistoryDay.routes.init(cb2);
        }
        setInterval( upd_Day,3000);
        upd_Day(); 
        
       
        
        o.serverInfo = new fac.ctrl.serverInfo('#d_stats');
        o.ctrls.push(o.powerHistory);
       
        var upd_serverInfo =  function (){
            var cb1 = function (){o.serverInfo.routes.render()}; 
            o.serverInfo.routes.init(cb1);
        };
        setInterval( upd_serverInfo,1000);
        upd_serverInfo();
    };

    o.routes.add("init", init);



    o.dispose = function (){
    };        
    
    return o;     
}();





