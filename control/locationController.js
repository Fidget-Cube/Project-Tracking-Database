// This is the database interface for the table "Locations" //
// Controls querying, insertion, editing and deletion       //
const dbConnection = require('../database/connection');

class LocationController {
    constructor() {
        console.log('Location Controller Initialized');
    }

    // Obtaining Location Data
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

    // Creating New Location Data
    addLocation(location) {

    }

    // Modifying Location Data
    setLocation(location) {

    }

    // Deleting Location Data
    deleteLocationByCustomer(cID) {
        
    }
}

module.exports = LocationController;