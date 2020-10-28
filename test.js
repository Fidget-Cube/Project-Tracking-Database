var http = require('http');
var mysql = require('mysql');
var fs = require('fs');

var con = mysql.createConnection({
	host: "localhost",
	user: "mvonblan_cs355fl20",
	password: "vo7615745"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

http.createServer(function (req, res) {
	fs.readFile('test.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);
