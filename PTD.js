const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const url = require('url');

const app = express();
const port = 8080;

const con = mysql.createConnection({
	host: "localhost",
	user: "mvonblan_cs355fl20",
	password: "vo7615745"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

app.get('/', (req, res) => {
	res.redirect('/home.html');
});

app.get('/view.html', (req, res) => {
	const q = url.parse(req.url, true).query;
	const txt = q.fname;
	if (txt) {
		res.send(txt);
	} else {
		res.sendFile('/home/student/vonblanken/Project-Tracking-Database/public/view.html');
	}
});

app.use(express.static('public'));

app.listen(port, () => {console.log(`Listening on http://blue.cs.sonoma.edu:${port}/`)});
