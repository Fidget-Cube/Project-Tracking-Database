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
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM Customers WHERE customerName="?"`;
			con.query({sql: query, values: [cID]}, function (err, result) {
				if (err) {return reject(err);};
				if (result.length > 0) {
					return resolve(result);
				} else {
					return resolve("Customer Not Found");
				}
			});
		});
	},
	showProject : function (pID) {
		return new Promise((resolve, reject) => {
			const query = `SELECT * FROM Projects WHERE projectID=?`;
			con.query({sql: query, values: [pID]}, function (err, result) {
				if (err) {return reject(err);};
				if (result.length > 0) {
					return resolve(result);
				} else {
					return resolve("Project Not Found");
				}
			});
		});
	}
};
