process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
}
);

process.on('exit', function () {
   var now = new Date();
   var then = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDay();
      then += ' '+now.getHours()+':'+now.getMinutes();
  console.log('Exit at: ' + then );
});
