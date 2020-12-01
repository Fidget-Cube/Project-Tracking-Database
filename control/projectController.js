// This is the database interface for the table "Projects" //
// Controls querying, insertion, editing and deletion      //
// Created by Max vonBlankenburg                           //

const dbConnection = require('../database/connection');

class ProjectController {
    constructor() {
        console.log('Project Controller Initialized');
    }

    // Obtaining Project Data
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

    // Creating New Project Data
    addProject(project) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO Projects (projectName, customer, location, status, orderManager, projectDesigner, targetInstallDate, orderingInstructions) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';
            dbConnection.query({
                sql: query,
                values: [project.projectName, project.customer, project.location, project.status, project.orderManager, project.projectDesigner, project.targetInstallDate, project.orderingInstructions]
            }, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        }).then(data => {
            console.log(data);
            return data.insertId;
        }).catch(err => {
            console.log(err);
            return false;
        })
    }

    // Modifying Project Data
    setProject(project) {

    }

    // Deleting Project Data
    deleteProjectByID(pID) {

    }
}

module.exports = ProjectController;