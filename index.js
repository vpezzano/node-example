// We need the http package, because we are going to expose
// this Node.js application as http server.
var http = require("http");

// Here we specify the callback for whoever 
// hits the port 8082
http.createServer(function (request, response) {
	
	// Send the HTTP header
	// HTTP Status: 200 (OK)
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	// Send the response boy as "Node example"
	response.end('Hello World!\n');
}).listen(8082);

// Print a message in console
console.log('Server is running at http://localhost:/8082');