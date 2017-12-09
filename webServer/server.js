module.exports = function(netLog){
    
var express = require('express');
var app = express();

app.use('/includes', express.static(__dirname + '/includes'));
app.use("/public"  , express.static(__dirname + '/public'));


app.get('/mod/ping', function (req, res){

    var fun =  function (err, ping) {
    if (!err) {
      return res.send(ping);
    } else {
      console.log(err);
    }
  };
   netLog.models.ping.getLast40(fun);

});

app.get('/mod/powerHistory', function (req, res){

    var fun =  function (err, powerHistory) {
    if (!err) {
      return res.send(powerHistory);
    } else {
      console.log(err);
    }
  };
   netLog.models.powerHistory.getLast40(fun);

});

app.get('/mod/servers', function (req, res){
    return res.send(netLog.servers);
});

app.get('/mod/state', function (req, res){
    return res.send(netLog.state);
});

app.get('/', function(req, res){    
    res.redirect('/public/default.html');
  });



app.listen(8080);
console.log('Web Up');

return app;
      
};



