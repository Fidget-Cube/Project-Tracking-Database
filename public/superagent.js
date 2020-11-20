function callDoc(url, req) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            outputController(this);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(req);
}

function outputController(xhttp) {
    let response = JSON.parse(xhttp.responseText);
    if (response.error) {
        document.getElementById("data").innerHTML = response.error;
    } else {
        let output = outputFormatter(response);
        document.getElementById("data").innerHTML = output;
    }
}