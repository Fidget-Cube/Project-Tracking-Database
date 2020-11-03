/*DROP DATABASE projectTracker;
CREATE DATABASE projectTracker;
Cannot create new databases in blue :(*/
USE mvonblan_cs355fl20;

DROP TABLE IF EXISTS Installations;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Projects;
DROP TABLE IF EXISTS Locations;
DROP TABLE IF EXISTS Customers;

CREATE TABLE Customers (
	customerID int NOT NULL AUTO_INCREMENT,
	customerName varchar(100) NOT NULL,
	contactName varchar(100),
	contactTitle varchar(100),
	contactPhoneNum varchar(100),
	salesperson varchar(100),
	projectManager varchar(100),
	PRIMARY KEY (customerID)
	
);

CREATE TABLE Locations (
	locationID int NOT NULL AUTO_INCREMENT,
	customer int NOT NULL,
	address1 varchar(100),
	address2 varchar(100),
	city varchar(100),
	state varchar(100),
	zip varchar(12),
	PRIMARY KEY (locationID),
	FOREIGN KEY (customer) REFERENCES Customers(customerID)
);

CREATE TABLE Projects (
	projectID int NOT NULL AUTO_INCREMENT,
	projectName varchar(100),
	customer int NOT NULL,
	location int NOT NULL,
	status varchar(10),
	orderManager varchar(100),
	projectDesigner varchar(100),
	targetInstallDate DATE,
	orderingInstructions varchar(800),
	PRIMARY KEY (projectID),
	FOREIGN KEY (customer) REFERENCES Customers(customerID),
	FOREIGN KEY (location) REFERENCES Locations(locationID)
);

CREATE TABLE Installations (
	installationID int NOT NULL AUTO_INCREMENT,
	project int NOT NULL,
	installationLead varchar(100),
	installationDate DATE, 
	installationInstructions varchar(800),
	PRIMARY KEY (installationID),
	FOREIGN KEY (project) REFERENCES Projects(projectID)
);

CREATE TABLE Orders (
	orderID int NOT NULL AUTO_INCREMENT,
	project int NOT NULL,
	vendor varchar(20),
	contractNumber varchar(20),
	vendorOrderNumber varchar(20),
	arrivalDate DATE,
	PRIMARY KEY (orderID),
	FOREIGN KEY (project) REFERENCES Projects(projectID)
);

