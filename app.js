var http = require('http');
var router = require('./router.js');

var app = http.createServer(function(req,res){

	console.log(req.url);


	router.home(req, res);
	router.contact(req, res);
	router.detail(req, res);

});

app.listen(3030, function(){
	console.log("Server Running at localhost:3030");
});

