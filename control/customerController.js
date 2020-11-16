// This is the database interface for the table "Project" //
// Controls querying, insertion, editing and deletion     //
const dbConnection = require('../database/connection');

class CustomerController {
    constructor() {
        console.log('Customer Controller Initialized');
    }

    // Querying
    getCustomerByName(cName) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Customers WHERE customerName=?';
            dbConnection.query({ sql: query, values: [cName] }, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        }).then(data => {
            if (data.length > 0) {
                console.log(data);
                return data;
            } else {
                console.log("Customer Not Found");
                return false;
            }
        }).catch(err => {
            console.log(err);
            return false;
        })
    }
}

module.exports = CustomerController;