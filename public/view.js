// Controls form submissions on the view page

// Project view form
function viewProject() {
    const request = JSON.stringify({
        project_id: document.getElementById("project_id").value
    });
    callDoc("/view.html", request);
}

// Customer view form
function viewCustomer() {
    const request = JSON.stringify({
        customer: document.getElementById("customer").value
    });
    callDoc("/view.html", request);
}