// Formats webpage text output for queried data

function outputFormatter(data) {
    let output = "";
    for (object of data) {
        for (attribute in object) {
            switch(attribute) {
                case "customerID":
                    output += "Customer ID: " + object[attribute] + "<br>";
                    break;
                case "customerName":
                    output += "Customer Name: " + object[attribute] + "<br>";
                    break;
                case "contactName":
                    output += "Contact Name: " + object[attribute] + "<br>";
                    break;
                case "contactTitle":
                    output += "Contact Title: " + object[attribute] + "<br>";
                    break;
                case "contactPhoneNum":
                    output += "Contact Phone Number: " + object[attribute] + "<br>";
                    break;
                case "salesperson":
                    output += "Salesperson: " + object[attribute] + "<br>";
                    break;
                case "projectManager":
                    output += "Project Manager: " + object[attribute] + "<br>";
                    break;
                case "locationID":
                    output += "Location ID: " + object[attribute] + "<br>";
                    break;
                case "address1":
                    output += "Address Line 1: " + object[attribute] + "<br>";
                    break;
                case "address2":
                    output += "Address Line 2: " + object[attribute] + "<br>";
                    break;
                case "city":
                    output += "City: " + object[attribute] + "<br>";
                    break;
                case "state":
                    output += "State: " + object[attribute] + "<br>";
                    break;
                case "zip":
                    output += "Zip Code: " + object[attribute] + "<br>";
                    break;
                case "projectID":
                    output += "Project ID: " + object[attribute] + "<br>";
                    break;
                case "projectName":
                    output += "Project Name: " + object[attribute] + "<br>";
                    break;
                case "customer":
                    output += "Parent Customer ID: " + object[attribute] + "<br>";
                    break;
                case "location":
                    output += "Operating Location ID: " + object[attribute] + "<br>";
                    break;
                case "status":
                    output += "Status: " + object[attribute] + "<br>";
                    break;
                case "orderManager":
                    output += "Order Manager: " + object[attribute] + "<br>";
                    break;
                case "projectDesigner":
                    output += "Project Designer: " + object[attribute] + "<br>";
                    break;
                case "targetInstallDate":
                    output += "Targeted Installation Date: " + new Date(object[attribute]).toString() + "<br>";
                    break;
                case "orderingInstructions":
                    output += "Ordering Instructions: " + object[attribute] + "<br>";
                    break;
                case "installationID":
                    output += "Installation ID: " + object[attribute] + "<br>";
                    break;
                case "project":
                    output += "Parent Project ID: " + object[attribute] + "<br>";
                    break;
                case "installationLead":
                    output += "Installation Lead: " + object[attribute] + "<br>";
                    break;
                case "installationInstructions":
                    output += "Installation Instructions: " + object[attribute] + "<br>";
                    break;
                case "orderID":
                    output += "Order ID: " + object[attribute] + "<br>";
                    break;
                case "vendor":
                    output += "Vendor: " + object[attribute] + "<br>";
                    break;
                case "contractNumber":
                    output += "Contract Number: " + object[attribute] + "<br>";
                    break;
                case "vendorOrderNumber":
                    output += "Vendor Order Number: " + object[attribute] + "<br>";
                    break;
                case "arrivalDate":
                    output += "Arrival Date: " + new Date(object[attribute]).toString() + "<br>";
                    break;
            }
        }
    }
    return output;
}