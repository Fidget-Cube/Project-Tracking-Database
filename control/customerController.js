const dbConnection = require('../database/connection');

class CustomerController {
    getCustomerByID(cID) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM Customers WHERE customerName="${cID}"`, function(err, result) {
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