const dbConnection = require('../database/connection');

class CustomerController {
    constructor() {
	    console.log('Customer Controller Initialized');
    }

    getCustomerByID(cID) {
        return new Promise((resolve, reject) => {
            dbConnection.query(`SELECT * FROM Customers WHERE customerName="${cID}"`, function(err, result) {
                if (err) { return reject(err); };
                if (result.length > 0) {
                    return resolve(result);
                } else {
                    return resolve("Customer Not Found");
                }
            });
        });
    }
}

module.exports = CustomerController;
