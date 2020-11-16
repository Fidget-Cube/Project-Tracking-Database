// This is the routing program for the Project Tracking Database //
// It controls web user requests and responses using Express.js  //
const express = require('express');
const url = require('url');
const customerController = new(require('./control/customerController.js'))();
const projectController = new(require('./control/projectController.js'))();

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
            res.send(project);
        } else {
            res.send("Error fetching data, check your input.");
        }
    } else if (q.customer) {
        let customer = await customerController.getCustomerByName(q.customer);
        if (customer) {
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