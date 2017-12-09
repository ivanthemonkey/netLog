app.util = {}; 
app.util.date = {};

app.util.date.getDate = function (str){
    return  new Date(str);
};

app.util.date.getDateFormat = function (d){
    
    var myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]; 
    
    var time = d.getTime() ;//- Number of milliseconds since 1/1/1970 @ 12:00 AM
    var seconds = d.getSeconds();  // Number of seconds (0-59)
    var minutes = d.getMinutes(); // Number of minutes (0-59)
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var hours  = d.getHours(); // - Number of hours (0-23)
    var day = d.getDay(); // - Day of the week(0-6). 0 = Sunday, ... , 6 = Saturday
    var dayName = myDays[day];
    var daym = d.getDate(); // - Day of the month (0-31)
    var month = d.getMonth(); // - Number of month (0-11)
    var year = d.getFullYear(); // - The four digit year (19

    return dayName + ' ' + hours +  ':' + minutes + ':' + seconds ;    
          
};

app.util.date.getDay = function (d){
    
    var myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]; 
    
    var time = d.getTime() ;//- Number of milliseconds since 1/1/1970 @ 12:00 AM
    var seconds = d.getSeconds();  // Number of seconds (0-59)
    var minutes = d.getMinutes(); // Number of minutes (0-59)
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var hours  = d.getHours(); // - Number of hours (0-23)
    var day = d.getDay(); // - Day of the week(0-6). 0 = Sunday, ... , 6 = Saturday
    var dayName = myDays[day];
    var daym = d.getDate(); // - Day of the month (0-31)
    var month = d.getMonth(); // - Number of month (0-11)
    var year = d.getFullYear(); // - The four digit year (19

    return dayName;    
          
};

app.util.date.getTime = function (d){
    
    var myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]; 
    
    var time = d.getTime() ;//- Number of milliseconds since 1/1/1970 @ 12:00 AM
    var seconds = d.getSeconds();  // Number of seconds (0-59)
    var minutes = d.getMinutes(); // Number of minutes (0-59)
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var hours  = d.getHours(); // - Number of hours (0-23)
    var day = d.getDay(); // - Day of the week(0-6). 0 = Sunday, ... , 6 = Saturday
    var dayName = myDays[day];
    var daym = d.getDate(); // - Day of the month (0-31)
    var month = d.getMonth(); // - Number of month (0-11)
    var year = d.getFullYear(); // - The four digit year (19

    return  hours +  ':' + minutes + ':' + seconds ;    
          
};


app.util.date.dateDiff = function(date1, date2){

    var diff= new Date() ; 

    diff.setTime(Math.abs(date1.getTime() - date2.getTime()));

    var timediff = new Date( diff.getTime());

    weeks = Math.floor(timediff / (1000 * 60 * 60 * 24 * 7));
    timediff -= weeks * (1000 * 60 * 60 * 24 * 7);

    days = Math.floor(timediff / (1000 * 60 * 60 * 24)); 
    timediff -= days * (1000 * 60 * 60 * 24);

    hours = Math.floor(timediff / (1000 * 60 * 60)); 
    timediff -= hours * (1000 * 60 * 60);

    mins = Math.floor(timediff / (1000 * 60)); 
    timediff -= mins * (1000 * 60);

    secs = Math.floor(timediff / 1000); 
    timediff -= secs * 1000;

    return weeks +  " weeks, " + days + " days, " + hours + " hours, " + mins + " minutes, and " + secs + " seconds";

      
      
          
};
