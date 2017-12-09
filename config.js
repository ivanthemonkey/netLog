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
    var david = {ip:'192.168.100.148',name:'david'};
    var j = {ip:'192.168.100.102',name:'Jacquelines Phone'};
    config.servers.push(david);
    config.servers.push(j);
    config.servers.push({ip:'192.168.100.137',name:'dad'}); 
    config.servers.push({ip:'192.168.100.107',name:'mum'});
config.powerOffDelay = 32;
config.refreshRate = 15000;

module.exports = config;
