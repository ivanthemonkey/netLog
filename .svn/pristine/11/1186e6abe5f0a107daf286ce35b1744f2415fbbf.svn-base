fac.ctrl.serverInfo = function(htmlElement){
    var o = this; 
    o.htmlElement = htmlElement;
    o.data = null; 

    function init(cb){
         $.get('../mod/state', function(obj) {
         o.data = obj;
         cb();
        }); 

    };
    
    function dispose(){
        o.data = null
    };

    function render(){
        if (o.data )
        {
            $(o.htmlElement).html(gethtml(o.data));
        }
        
    };
   
    function gethtml(obj){
        var txt = new Array();
        txt.push('Up for : ');
        
        var ud = app.util.date;

        var d = new Date();
        d.setTime(obj.startedAt);
        txt.push(ud.dateDiff(d, new Date()));

        txt.push(' since ');
        txt.push(ud.getDateFormat(d));

        txt.push('<br />');

        txt.push('Power  ');
        if (obj.isPowerOn){
            txt.push( '<span class="offstate">On</span>');
        }
        else{
            txt.push('<span class="offstate">Off</span>');
        }
        
        txt.push(' at ');
        var d1 = new Date();
        d1.setTime(obj.isPowerOnTimeStamp);
        txt.push(ud.getDateFormat(d1));

        txt.push(' updated at ');
        var d2 = new Date();
        d2.setTime(obj.isPowerOnTimeUpdated);
        txt.push(ud.getDateFormat(d2));

        txt.push('<br />'); 
        txt.push('Minutes till power off : ' +obj.timeTilloff );

        return txt.join('');
   
   };
    
       o.routes.add('init',init);
    o.routes.add('render',render);
    o.routes.add('dispose',dispose);

 
};

fac.ctrl.serverInfo.prototype =  new fac.ctrl.base;



