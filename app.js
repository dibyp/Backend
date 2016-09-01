var http = require('http');
var router = require('./router.js');
var url = require('url');

var app = http.createServer(function(req,res){
	var query = url.parse(req.url, true).query;

	console.log(req.url);


	router.home(req, res);
	router.detail(req, res);

});

app.listen(3030, function(){
	console.log("Server Running at localhost:3030");
});

