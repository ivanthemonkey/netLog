var config = {};

config.mongoose = require('mongoose');
config.mongoose.connect('mongodb://127.0.0.1/netLog');
config.db = config.mongoose.connection;
config.db.on('error', console.log);
config.db.once('open',
    function callback () {
    console.log('db open');
});
config.servers = new Array();
    config.servers.push({ip:'10.74.75.49',name:'david'});
    config.servers.push({ip:'10.74.75.131',name:'j'});
config.powerOffDelay = 40;
config.refreshRate = 15000;

module.exports = config;
