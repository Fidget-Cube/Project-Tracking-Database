// This is the database interface for the table "Locations" //
// Controls querying, insertion, editing and deletion       //
const dbConnection = require('../database/connection');

class LocationController {
    constructor() {
        console.log('Location Controller Initialized');
    }

    // Querying
    getLocationByCustomer(cID) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Locations WHERE customer=?';
            dbConnection.query({ sql: query, values: [cID] }, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        }).then(data => {
            if (data.length > 0) {
                console.log(data);
                return data;
            } else {
                console.log("Location Not Found");
                return false;
            }
        }).catch(err => {
            console.log(err);
            return false;
        })
    }
}

module.exports = LocationController;