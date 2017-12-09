require('./err.js');

var piface =  require('./piface.js');

var on = true; 

function switchIt (){
   if (on){
	piface.on(); 

   }else {
	piface.off();
   }
   on = !on;   
}; 

setInterval(switchIt,500);

