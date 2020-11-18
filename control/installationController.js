// This is the database interface for the table "Installations" //
// Controls querying, insertion, editing and deletion           //
const dbConnection = require('../database/connection');

class InstallationController {
    constructor() {
        console.log('Installation Controller Initialized');
    }

    // Obtaining Installation Data
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

    // Creating New Installation Data
    addInstallation(install) {

    }

    // Modifying Installation Data
    setInstallation(install) {

    }

    // Deleting Installation Data
    deleteInstallationByProject(pID) {
        
    }
}

module.exports = InstallationController;