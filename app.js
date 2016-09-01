var http = require('http');


http.createServer(funciton(req,res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("hello world \n");
	res.end();
}).listen(3030);

console.log("Server Running at localhost:3030");
