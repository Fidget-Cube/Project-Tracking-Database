// This is the database interface for the table "Installations" //
// Controls querying, insertion, editing and deletion           //
const dbConnection = require('../database/connection');

class InstallationController {
    constructor() {
        console.log('Installation Controller Initialized');
    }

    // Querying
    getInstallationByProject(pID) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Installations WHERE project=?';
            dbConnection.query({ sql: query, values: [pID] }, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        }).then(data => {
            if (data.length > 0) {
                console.log(data);
                return data;
            } else {
                console.log("Installation Not Found");
                return false;
            }
        }).catch(err => {
            console.log(err);
            return false;
        })
    }
}

module.exports = InstallationController;