const dbConnection = require('../database/connection');

class ProjectController {
    getProjectByID(pID) {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM Projects WHERE projectID=${pID}`, function(err, result) {
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