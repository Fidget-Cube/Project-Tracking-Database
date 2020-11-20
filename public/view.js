function viewProject() {
    const request = JSON.stringify({
        project_id: document.getElementById("project_id").value
    });
    callDoc("/view.html", request);
}

function viewCustomer() {
    const request = JSON.stringify({
        customer: document.getElementById("customer").value
    });
    callDoc("/view.html", request);
}