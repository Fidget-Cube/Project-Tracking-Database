function viewProject() {
    const request = JSON.stringify({
        project_id: document.getElementById("project_id").value
    });
    callDoc("/view.html", request)
    .then(xhttp => {
        let response = JSON.parse(xhttp.responseText);
        if (response.error) {
            document.getElementById("data").innerHTML = response.error;
        } else {
            document.getElementById("data").innerHTML = response[0].projectName;
        }
    })
    .catch(xhttp => {document.getElementById("data").innerHTML = "Failed to Connect. Error Code: " + xhttp.status + ": " + xhttp.statusText});
}

function viewCustomer() {
    const request = JSON.stringify({
        customer: document.getElementById("customer").value
    });
    callDoc("/view.html", request)
    .then(xhttp => {
        let response = JSON.parse(xhttp.responseText);
        if (response.error) {
            document.getElementById("data").innerHTML = response.error;
        } else {
            document.getElementById("data").innerHTML = response[0].customerName;
        }
    })
    .catch(xhttp => {document.getElementById("data").innerHTML = "Failed to Connect. Error Code: " + xhttp.status + ": " + xhttp.statusText});
}

function callDoc(url, req) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this);
                } else {
                    reject(this);
                }
            }
        };
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(req);
    });
}