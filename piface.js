var piface     = {};
piface.isOn    = false;
piface.spawn   = require('child_process').spawn;

	var initWkr  = piface.spawn('/usr/bin/python', ['/home/pi/work/netLog/python/init.py']);
		
	function killInit () {
		process.kill(initWkr);
	} ;   

	process.on("uncaughtException", killInit);
    	process.on("SIGINT", killInit);
    	process.on("SIGTERM", killInit);



piface.on = function(){
    var worker  = piface.spawn('/usr/bin/python', ['/home/pi/work/netLog/python/on.py']);

    function killWorker(){
        process.kill(worker);
    };

    process.on("uncaughtException", killWorker);
    process.on("SIGINT", killWorker);
    process.on("SIGTERM", killWorker);

    piface.isOn = true ;
};

piface.off = function(){
    var worker = piface.spawn('/usr/bin/python', ['/home/pi/work/netLog/python/off.py']);
    
    function killWorker(){
        process.kill(worker);
    };

    process.on("uncaughtException", killWorker);
    process.on("SIGINT", killWorker);
    process.on("SIGTERM", killWorker);
    piface.isOn = false ;
};



module.exports =  piface;

