const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const express = require('express');

var con = mysql.createConnection({
	host: "localhost",
	user: "mvonblan_cs355fl20",
	password: "vo7615745"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

const app = express();
const port = 3000

const dir = path.join(__dirname, 'public');
app.use(express.static(dir));

app.listen(port, () => {console.log('Listening on http://blue.cs.sonoma.edu:${port}/')});

//http.createServer(function (req, res) {
//	fs.readFile('home.html', function(err, data) {
//		res.writeHead(200, {'Content-Type': 'text/html'});
//		res.write(data);
//		return res.end();
//	});
//}).listen(8080);
