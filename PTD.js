const express = require('express');
const url = require('url');
const customerController = new(require('./control/customerController.js'))();
const projectController = new(require('./control/projectController.js'))();

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.redirect('/home.html');
});

app.get('/view.html', async function(req, res) {
    const q = url.parse(req.url, true).query;
    const customer = q.customer;
    const project = q.project;
    if (project) {
        let result = await projectController.getProjectByID(project);
        console.log(result);
        res.send(result);
    } else if (customer) {
        let result = await customerController.getCustomerByID(customer);
        console.log(result);
        res.send(result);
    } else {
        res.sendFile('/home/student/vonblanken/Project-Tracking-Database/public/view.html');
    }
});

app.use(express.static('public'));

app.listen(port, () => { console.log(`Listening on http://blue.cs.sonoma.edu:${port}/`) });