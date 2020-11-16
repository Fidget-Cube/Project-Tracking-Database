// This is the database interface for the table "Project" //
// Controls querying, insertion, editing and deletion     //
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
                return data;
            } else {
                return "Project Not Found";
            }
        }).catch(err => {
            return err;
        });
    }
}

module.exports = ProjectController;