fac.ctrl.powerHistoryDay = function(htmlElement){
    var o = this; 
    o.htmlElement = htmlElement;
    o.data = null; 
    var ud = app.util.date ;  


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
        if (o.data)
        {
            var aryToday = createArray(o.data);
            console.log(aryToday);
            var html = gethtml(aryToday);
            $(htmlElement).html(html);
         

        }
    };
   

    function createArray(history){
        var data = new Array();
 
        var lenOfSegment = 15;
        var segmentHours = 24 * 7; 
        var minsInHour   = 60 
        var msPerMin     = 60000;
        var segments     = segmentHours * (minsInHour / lenOfSegment) ;
        var curHistNum   = 0 ; 

        var segTime = new Date();
        segTime.setHours(23,59,59,0);

        for (var i = 0 ; i < segments; i++){
            segTime.setMilliseconds(segTime.getMilliseconds() - (lenOfSegment * msPerMin));
            var curHistNum = getHistoryItem(segTime,history,curHistNum);

            var state = false ;
	    if (curHistNum < history.length ){ 
            	if (history[curHistNum].state){
			state = history[curHistNum].state;
	    	}
	    }	  
            data.push (getSegmentInfo(i,segTime,state));   
        }
         return data; 
    };
    
    function getHistoryItem(segTime,history,curHistNum){        
        if( history.length <= curHistNum) { 
            return curHistNum;
        }

        var histEntry = history[curHistNum]; 
        if(ud.getDate(segTime) > ud.getDate(histEntry.stateDate)){
            return curHistNum ;
        }
        curHistNum ++;   
        return getHistoryItem(segTime,history,curHistNum)
    };
    
    function getSegmentInfo(segment, time, state){
        var obj={};
        obj.segment = segment;
        obj.time = new Date(time);
        obj.state = state;
        console.log(obj.time);
        console.log(time);
        
        return obj;
    };


  function gethtml(obj){
        var txt = new Array();
           
        var i,j,temparray,chunk = 24 * 4 ;
        for (i=0,j=obj.length; i<j; i+=chunk) {
            temparray = obj.slice(i,i+chunk);
            txt.push('<div class="daySegment">');
            
            ud.getDay(temparray[0].time) 
            txt.push(gethtmlForDay(temparray));
            txt.push('</div>');
        }
        
        return txt.join('');

   };

    function gethtmlForDay(obj){
        var txt = new Array();

        for (var i =0 ; i< obj.length;i++ ){
        console.log();
        var r = obj[i];

        if((r.segment % 4) == 0 ){
        
            txt.push('<div class="dayHourSegment">');

            if((r.segment % 4) == 0 ){
                txt.push('<div class="dayHours">');
                txt.push(getEntryTime(r));
                txt.push('</div>');
        
                txt.push(getEntry(obj[i]));  
                i++;
                txt.push(getEntry(obj[i]));  
                i++;
                txt.push(getEntry(obj[i]));  
                i++;
                txt.push(getEntry(obj[i]));  
        }

        txt.push('</div>');

               
        }
        }
        return txt.join('');
   
   };
   
   function getEntryTime(r){
       return r.time.getHours();
   };
    
   function getEntry(row){

        var dclass = ''; 

        if(row.state){
            dclass = 'dayHoursOn';
        }else{
            dclass = 'dayHoursOff';
        }
        
        var now = new Date();
 
        if (row.time > now){
             dclass = 'dayHoursFuture';
        }
                return '<div class="'+ dclass +'" title="' + ud.getTime(row.time) + '" >&nbsp;' + '</div>'; 
    
    };

    o.routes.add('init',init);
    o.routes.add('render',render);
    o.routes.add('dispose',dispose);


 
};

fac.ctrl.powerHistoryDay.prototype =  new fac.ctrl.base;


