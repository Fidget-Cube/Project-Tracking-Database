// This is the routing program for the Project Tracking Database //
// It controls web user requests and responses using Express.js  //
// Created By Max vonBlankenburg                                 //

const express = require('express');
const customerController = new(require('./control/customerController.js'))();
const locationController = new(require('./control/locationController.js'))();
const projectController = new(require('./control/projectController.js'))();
const installationController = new(require('./control/installationController.js'))();
const orderController = new(require('./control/orderController.js'))();

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redirects to the homepage
app.get('/', (req, res) => {
    res.redirect('/home.html');
});

// Controls requests to view data in the database
app.post('/view.html', async function(req, res) {
    if (req.body.project_id) {
        let project = await projectController.getProjectByID(req.body.project_id);
        if (project) {
            let installation = await installationController.getInstallationByProject(project[0].projectID);
            if (installation) project = project.concat(installation);
            let order = await orderController.getOrderByProject(project[0].projectID);
            if (order) project = project.concat(order);
            res.send(JSON.stringify(project));
        } else {
            res.send('{"error":"Error fetching data, check your input."}');
        }
    } else if (req.body.customer) {
        let customer = await customerController.getCustomerByName(req.body.customer);
        if (customer) {
            let location = await locationController.getLocationByCustomer(customer[0].customerID);
            if (location) customer = customer.concat(location);
            let project = await projectController.getProjectByCustomer(customer[0].customerID);
            if (project) customer = customer.concat(project);
            res.send(JSON.stringify(customer));
        } else {
            res.send('{"error":"Error fetching data, check your input."}');
        }
    }
});

// Controls requests to add data to the database
app.post('/create.html', async function(req, res) {
    if (req.body) {
        let pID = await projectController.addProject(req.body);
        if (pID) {
            let project = await projectController.getProjectByID(pID);
            res.send(JSON.stringify(project));
        } else {
            res.send('{"error":"Error, Project Creation Failed"}');
        }
    }
});

app.use(express.static('public'));

app.listen(port, () => { console.log(`Listening on http://blue.cs.sonoma.edu:${port}/`) });