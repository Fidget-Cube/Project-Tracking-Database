const dbConnection = require('../database/connection');

class ProjectController {
    constructor() {
	    console.log('Project Controller Initialized');
    }

    getProjectByID(pID) {
        return new Promise((resolve, reject) => {
            dbConnection.query(`SELECT * FROM Projects WHERE projectID=${pID}`, function(err, result) {
                if (err) { return reject(err); };
                if (result.length > 0) {
                    return resolve(result);
                } else {
                    return resolve("Project Not Found");
                }
            });
        });
    }
}

module.exports = ProjectController;
