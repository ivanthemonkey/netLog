var util   = require('./util.js');
var log    = new require('./log.js');
var config = require('./config.js')
             require('./err.js');

var netLog = function(){
    var app  = {};
    var ping = require('net-ping');
    var web  = require('./webServer/server.js')(app);
    var pingSession = null;
    var piface = require('./piface.js');

    app.models = {};
    app.models.servers = require('./models/servers.js')(config.mongoose,config.db);
    app.models.ping = require('./models/ping.js')(config.mongoose,config.db);
    app.models.powerHistory = require('./models/powerHistory.js')(config.mongoose,config.db);
     
    app.servers = null;

    app.servers = config.servers ;
    app.state = {}; 
    app.state.startedAt = Date.now();
    app.state.isPowerOn = false;  
    app.state.isPowerOnTimeStamp = Date.now();
    app.state.isPowerOnTimeUpdated = Date.now();
    app.state.timeTilloff=config.powerOffDelay; 
   
    app.init = function(){
        writeWelcome();
        // testForDbData();
        // load()
       app.start();
    };

    app.dispose = function(){
        app.db.dispose();
        log.dispose();
    };

    function writeWelcome(){

        log.wl('netLog - Started');
        log.wl('. : Ping');
        log.wl('x : Failed ping');
        log.wl('e : Error Ping');
        log.wl('');
    };

    app.start = function (){
        var options = {
           networkProtocol: ping.NetworkProtocol.IPv4,
           retries: 0,
           timeout: 1000
            };
        
        pingSession = ping.createSession(options);
        pingSession.on ("error", pingError);   
        app.timeout= setInterval(app.testServers,config.refreshRate);
    };

    function pingError(error) {
        // there is an error raised by the ping module that we are just ignoring at the moment. 
        //  log.w('e');
    };


    function testForDbData(){  
        var fun = function (err, results) {
                            if(err){ 
                                throw err;
                                }

                            if (results.length!=3) {
                                servers.populate();
                              };
                            };
        app.models.servers.find({},fun); 
        log.wl('testForDbData');
    };

    function load(){
          var fun = function (err, results) {   
                            if(err){ 
                                throw err;
                                }
                            app.servers = results;
                            app.start();
                            };
        app.models.servers.find({},fun); 
        log.wl('load');
    };

    app.testServers = function (){
        var testGroup = new Array();
            testGroup.resultCount = 0 ; 
        for(var i=0; i < app.servers.length; i++){
                var pingTest = {}; 
                    pingTest.server =  app.servers[i]; 
                    pingTest.testGroup = testGroup;
                    pingTest.results = null;
                testGroup.push(pingTest);
		      }		
            
        for(var i=0; i < testGroup.length; i++){
            var pingTest = testGroup[i]; 
   		    testServer(getProcessPingTest(pingTest),pingTest.server);
        }	
  
    };

    function getProcessPingTest(pingTest){
    
        var testGroup = pingTest.testGroup;

        return function(res){
            if (!testGroup){
                console.log(pingTest);
            }

            testGroup.resultCount ++; 
            pingTest.results = res; 
            if (testGroup.resultCount != testGroup.length ){
                return;
            }
            var activePing = false; 

            for(var i=0; i < testGroup.length; i++){
                if( testGroup[i].results.result == 'up'){
                    activePing = true;
                    break;
                }
            }		


            if (activePing){
                app.turnOnPower();
                app.state.timeTilloff = config.powerOffDelay; 
                return;
            }
    
            var d = (res.date - app.state.isPowerOnTimeUpdated);
            var seconds = Math.round(d/1000);
            var min =  Math.round(seconds/60);
            if (
                (activePing == false) &&  
                (min > config.powerOffDelay) && 
                app.state.isPowerOn 
               ){
                app.turnOffPower();
                }
             if(app.state.isPowerOn){
                  app.state.timeTilloff= (config.powerOffDelay - min); 
             }else{
                  app.state.timeTilloff=0; 
             }
             
             
              testGroup.isComplete = true;
              testGroup.splice(0,0);
              testGroup = null;
        };

    };

    function testServer(cb, server){

        var pingCallBack = function(error, target){

            var res = {date:Date.now(),result:'up'};

    		if (error){
                log.w('x');
                res.result = 'down';	
                }
    		else{
                res.result = 'up';
                log.w('.');
            }

            server.status = res.result;	
            cb(res);	
            var updatePingLog =  function(err,last){
                        if(err){ 
                           log.w(err);
                        }
                        if(last.length==0 || last[0].pingStatus != res.result ){
                          
                        var newPing = app.models.ping.new( server.ip,
                                                           server.name,
                                                           res.date,
                                                           res.result);
                       newPing.save();
                   }
		        };
            app.models.ping.getLast(server.ip,updatePingLog);
        }

        pingSession.pingHost (server.ip,pingCallBack);
            	
    };
    
    app.turnOnPower = function (){
        if(!app.state.isPowerOn){
            app.state.isPowerOn = true;
            app.state.isPowerOnTimeStamp = Date.now();
            log.w(' On ');
            savePowerChange();
            piface.on();
        }
        app.state.isPowerOnTimeUpdated = Date.now();
        };
    
    app.turnOffPower = function (){
        if(app.state.isPowerOn){
            app.state.isPowerOn = false;
            app.state.isPowerOnTimeStamp = Date.now();
            log.w(' Off ');
            savePowerChange();
            piface.off();

        }
        app.state.isPowerOnTimeUpdated = Date.now();
        };
    
    function savePowerChange(){
      var powerHistory = app.models.powerHistory.new(
                            app.state.isPowerOn , 
                            app.state.isPowerOnTimeStamp  );
          powerHistory.save();
    };

   
    return app; 
}();


 
netLog.init(); 

