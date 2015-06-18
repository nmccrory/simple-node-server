//get the http module:
var http = require('http');
//fs module reads and writes content for responses
var fs = require('fs');
//create server with http module:
var server = http.createServer(function(request,response){
	//read url
	console.log('client request URL: ', request.url);
	//routing
	if(request.url === '/'){
		fs.readFile('index.html', 'utf8', function(errors,contents){
			response.writeHead(200,{'Content-Type': 'text/html'}); //info about response
			response.write(contents);
			response.end();
		});
		return true;
	}

	//if request has no match
	else{
		response.writeHead(404);
		response.end('File not found!');
	}
})
//specifying port
server.listen(6789);
console.log("running in localhost port 6789");