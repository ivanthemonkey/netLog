fac.ctrl.powerHistory = function(htmlElement){
    var o = this; 
    o.htmlElement = htmlElement;
    o.data = null; 

    function init(cb){
         $.get('../mod/powerHistory', function(obj) {
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

        for (var i =0 ; i< obj.length;i++ ){
            var r = obj[i];
                gethtmlLine(txt,r);
        }
        return txt.join('');
   
   };
    
    function gethtmlLine(txt,r){
        txt.push('<span>');
       // txt.push( r.stateDate + ' ' );
        var ud = app.util.date ; 
        txt.push( ud.getDateFormat(ud.getDate(r.stateDate)) + ' ' );
        txt.push('</span>');
               
        txt.push('<span>');
        txt.push(r.state);
        txt.push('</span>');
         txt.push('<br />');
       };
   

    o.routes.add('init',init);
    o.routes.add('render',render);
    o.routes.add('dispose',dispose);

 
};

fac.ctrl.powerHistory.prototype =  new fac.ctrl.base;


