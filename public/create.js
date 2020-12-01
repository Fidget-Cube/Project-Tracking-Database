// Controls form submissions on the create page. //
// Created by Max vonBlankenburg                 //

// Project creation form
function addProject() {
    const request = JSON.stringify({
        projectName: document.getElementById("projectName").value,
        customer: document.getElementById("customer").value,
        location: document.getElementById("location").value,
        status: document.getElementById("projectStatus").value,
        orderManager: document.getElementById("orderManager").value,
        projectDesigner: document.getElementById("projectDesigner").value,
        targetInstallDate: document.getElementById("targetInstallDate").value,
        orderingInstructions: document.getElementById("orderInstructions").value
    });
    callDoc("/create.html", request);
}