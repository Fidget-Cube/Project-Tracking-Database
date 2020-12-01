// This is the database interface for the table "Orders"  //
// Controls querying, insertion, editing and deletion     //
// Created by Max vonBlankenburg                          //

const dbConnection = require('../database/connection');

class OrderController {
    constructor() {
        console.log('Order Controller Initialized');
    }

    // Obtaining Order Data
    getOrderByProject(pID) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Orders WHERE project=?';
            dbConnection.query({ sql: query, values: [pID] }, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        }).then(data => {
            if (data.length > 0) {
                console.log(data);
                return data;
            } else {
                console.log("Order Not Found");
                return false;
            }
        }).catch(err => {
            console.log(err);
            return false;
        })
    }

    // Creating New Order Data
    addOrder(order) {

    }

    // Modifying Order Data
    setOrder(order) {

    }

    // Deleting Order Data
    deleteOrderByProject(pID) {

    }
}

module.exports = OrderController;