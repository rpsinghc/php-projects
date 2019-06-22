/*var express = require('express');
var app = express();

var execPHP = require('./execphp.js')();

execPHP.phpFolder = '/Users/rpsinghk/projects/php-projects/helloworld/public/';

app.use('*.php',function(request,response,next) {
	execPHP.parseFile(request.originalUrl,function(phpResult) {
		response.write(phpResult);
		response.end();
	});
});

app.listen(3000, function () {
	console.log('Node server listening on port 3000!');
});
*/
var phpServer = require('node-php-server');
 
// Create a PHP Server
phpServer.createServer({
    port: 8000,
    hostname: '127.0.0.1',
    base: '.',
    keepalive: false,
    open: false,
    bin: 'php',
    router: __dirname + '/server.php'
});
console.log(process);
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
// Close server
phpServer.close();