const dbConnection = require('../database/connection');

class CustomerController {
    constructor() {
        console.log('Customer Controller Initialized');
    }

    getCustomerByID(cID) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Customers WHERE customerName=?';
            dbConnection.query({ sql: query, values: [cID] }, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        }).then(data => {
            if (data.length > 0) {
                return data;
            } else {
                return "Customer Not Found";
            }
        }).catch(err => {
            return err;
        })
    }
}

module.exports = CustomerController;