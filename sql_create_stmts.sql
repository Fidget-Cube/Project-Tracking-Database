DROP DATABASE projectTracker;
CREATE DATABASE projectTracker;

DROP TABLE customers;
DROP TABLE locations;
DROP TABLE projects;
DROP TABLE installations;
DROP TABLE order;

CREATE TABLE Customers (
	customerID int NOT NULL,
	customerName varchar(100) NOT NULL,
	contactName varchar(100),
	contactTitle varchar(100),
	contactPhoneNum varchar(100),
	salesperson varchar(100),
	projectManager varchar(100),
	PRIMARY KEY (customerID)
	
);

CREATE TABLE Locations (
	locationID int NOT NULL,
	address1 varchar(100),
	address2 varchar(100),
	city varchar(100),
	state varchar(100),
	zip varchar(12)
	PRIMARY KEY (locationID),
	FOREIGN KEY (customerID) REFERENCES Customers(customerID)
);

CREATE TABLE Projects (
	projectID int NOT NULL,
	projectName varchar(100),
	status varchar(10),
	orderManager varchar(100),
	projectDesigner varchar(100),
	targetInstallDate DATE,
	orderingInstructions varchar(800),
	PRIMARY KEY (projectID),
	FOREIGN KEY (customerID) REFERENCES Customers(customerID),
	FOREIGN KEY (locationID) REFERENCES Locations(locationID),
);

CREATE TABLE Installations (
	installationID int NOT NULL,
	installationLead varchar(100),
	installationDate DATE, 
	installationInstructions varchar(800),
	PRIMARY KEY (installationID),
	FOREIGN KEY (projectID) REFERENCES Projects(projectID),

);

CREATE TABLE Orders (
	orderID int NOT NULL,
	vendor varchar(20)
	contractNumber varchar(20),
	vendorOrderNumber varchar(20),
	arrivalDate DATE,
	PRIMARY KEY (orderID),
	FOREIGN KEY (projectID) REFERENCES Projects(projectID),
);

