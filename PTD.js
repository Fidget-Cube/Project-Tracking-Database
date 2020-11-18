// This is the routing program for the Project Tracking Database //
// It controls web user requests and responses using Express.js  //
const express = require('express');
const url = require('url');
const customerController = new(require('./control/customerController.js'))();
const locationController = new(require('./control/locationController.js'))();
const projectController = new(require('./control/projectController.js'))();
const installationController = new(require('./control/installationController.js'))();
const orderController = new(require('./control/orderController.js'))();

const app = express();
const port = 8080;

// Redirects to the homepage
app.get('/', (req, res) => {
    res.redirect('/home.html');
});

// Controls requests to view data in the database
app.get('/view.html', async function(req, res) {
    const q = url.parse(req.url, true).query;
    if (q.project) {
        let project = await projectController.getProjectByID(q.project);
        if (project) {
            let installation = await installationController.getInstallationByProject(project[0].projectID);
            if (installation) project = project.concat(installation);
            let order = await orderController.getOrderByProject(project[0].projectID);
            if (order) project = project.concat(order);
            res.send(project);
        } else {
            res.send("Error fetching data, check your input.");
        }
    } else if (q.customer) {
        let customer = await customerController.getCustomerByName(q.customer);
        if (customer) {
            let location = await locationController.getLocationByCustomer(customer[0].customerID);
            if (location) customer = customer.concat(location);
            let project = await projectController.getProjectByCustomer(customer[0].customerID);
            if (project) customer = customer.concat(project);
            res.send(customer);
        } else {
            res.send("Error fetching data, check your input.");
        }
    } else {
        res.sendFile('/home/student/vonblanken/Project-Tracking-Database/public/view.html');
    }
});

app.use(express.static('public'));

app.listen(port, () => { console.log(`Listening on http://blue.cs.sonoma.edu:${port}/`) });
