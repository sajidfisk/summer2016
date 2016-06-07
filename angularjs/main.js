/* Hello World! program in node.js */
console.log("Hello, World")

var http = require("http");

http.createServer(function(request, response){
	// send the HTTP header
	// HTTP status: 200 OK
	// contenty type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// send the response body as "hello world"
	response.end('Hello World\n');

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("File Reading Ended.");

fs.readFile('input.txt', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});


console.log("File Reading Ended.")