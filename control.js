const mysql = require('mysql');

const con = mysql.createConnection({
	host: "localhost",
	user: "mvonblan_cs355fl20",
	password: "vo7615745",
	database: "mvonblan_cs355fl20"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connection Successful");
});

exports.database = {
	showCustomer : function (cID) {
		return cID;
	},
	showProject : function (pID) {
		return new Promise((resolve, reject) => {
			con.query(`SELECT * FROM Projects WHERE projectID=${pID}`, function (err, result) {
				if (err) {throw err; return reject(err);};
				if (result.length > 0) {
					return resolve(result);
				} else {
					return resolve("Project Not Found");
				}
			});
		});
	}
};
