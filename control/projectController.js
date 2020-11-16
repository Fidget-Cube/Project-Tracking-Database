// This is the database interface for the table "Projects" //
// Controls querying, insertion, editing and deletion      //
const dbConnection = require('../database/connection');

class ProjectController {
    constructor() {
        console.log('Project Controller Initialized');
    }

    // Querying
    getProjectByID(pID) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Projects WHERE projectID=?';
            dbConnection.query({ sql: query, values: [pID] }, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        }).then(data => {
            if (data.length > 0) {
                console.log(data);
                return data;
            } else {
                console.log("Project Not Found");
                return false;
            }
        }).catch(err => {
            console.log(err);
            return false;
        });
    }

    getProjectByCustomer(cID) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM Projects WHERE customer=?';
            dbConnection.query({ sql: query, values: [cID] }, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        }).then(data => {
            if (data.length > 0) {
                console.log(data);
                return data;
            } else {
                console.log("Project Not Found");
                return false;
            }
        }).catch(err => {
            console.log(err);
            return false;
        });
    }
}

module.exports = ProjectController;