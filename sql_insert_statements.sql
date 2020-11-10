USE mvonblan_cs355fl20;

INSERT INTO Customers (customerName, contactName, contactTitle, contactPhoneNum, salesperson, projectManager)
VALUES
	('Sprint Copy Center', 'any contact', 'purchasing', '707-823-3900', 'sls1', 'pm1'),
	('Common Sense Business Solutions', 'some contact', 'manager', '707-528-2151', 'sls2', 'pm2'),
	('Sonoma Design Apparel & Promotions', 'another contact', 'facilities', '707-578-4739', 'sls3', 'pm3'),
	('Applied Signs', 'good contact', 'purchasing', '707-202-4569', 'sls3', 'pm3'),
	('ChromaGraphics', 'fav contact', 'manager', '707-528-2644', 'sls2', 'pm2'),
	('Clone Digital Print & Copy', 'one contact', 'facilities', '707-527-6565', 'sls1', 'pm1'),
	('E.R. Sawyer Jewelers', 'helpful contact', 'purchasing', '707-963-0239', 'sls2', 'pm2'),
	('GW2 Printing', 'my contact', 'manager', '707-528-2503', 'sls1', 'pm1'),
	('Barlow Printing', 'any contact', 'facilities', '707-664-9773', 'sls3', 'pm3'),
	('Sonoma-USA', 'some contact', 'purchasing', NULL, 'sls2', 'pm2'),
	('TekTailor, Inc', 'another contact', 'manager', NULL, 'sls3', 'pm3'),
	('Sonoma County Economic Development Board', 'good contact', 'facilities', '707-565-7170', 'sls1', 'pm1'),
	('GreenLynx Woodworks', 'fav contact', 'purchasing', '707-787-5969', 'sls1', 'pm1'),
	('MISSION Engineering Inc', 'one contact', 'manager', '866-333-1828', 'sls2', 'pm2'),
	('E.R. Sawyer Jewelers St Helena', 'helpful contact', 'facilities', '707-963-0239', 'sls3', 'pm3');

INSERT INTO Locations (customer, address1, address2, city, state, zip)
VALUES
	(1, '175 N Main Street', NULL, 'Sebastopol', 'CA', '95472'),
	(2, '2208 Northpoint Parkway', NULL, 'Santa Rosa', 'CA', '95407'),
	(3, '3510 Airway Dr', NULL, 'Santa Rosa', 'CA', '95403'),
	(4, '1700 Piner Rd #C', NULL, 'Santa Rosa', 'CA', '95403'),
	(5, '440 Tesconi Circle', NULL, 'Santa Rosa', 'CA', '95401'),
	(6, '618 5th St.', NULL, 'Santa Rosa', 'CA', '95404'),
	(7, '638 Fourth Street', NULL, 'Santa Rosa', 'CA', '95404'),
	(8, '1350 Central Ave Ste 1', NULL, 'Santa Rosa', 'CA', '95401'),
	(9, '481 Aaron St', NULL, 'Cotati', 'CA', '94931'),
	(10, '3253 Santa Rosa Ave.', NULL, 'Santa Rosa', 'CA', '95407'),
	(11, '3253 Santa Rosa Ave', NULL, 'Santa Rosa', 'CA', '95407'),
	(12, '141 Stony Circle Suite 110', NULL, 'Santa Rosa', 'CA', '95401'),
	(13, '3260 Santa Rosa Ave', NULL, 'Santa Rosa', 'CA', '95407'),
	(14, '1736 Corporate Circle', NULL, 'Petaluma', 'CA', '94954'),
	(15, '1343 Main St', NULL, 'St Helena', 'CA', '94574');
	
INSERT INTO Projects (projectName, customer, location, status, orderManager, projectDesigner, targetInstallDate, orderingInstructions)
VALUES
	('project1', 1, 1, 'in progress', 'om1', 'pm1', '2020-10-20', 'asap'),
    	('project2', 2, 2, 'completed', 'om2', 'pm2', '2020-11-20', 'asap!'),
    	('project3', 3, 3, 'in progress', 'om3', 'pm3', '2020-12-15', 'write in "green" for color selection before faxing order in'),
    	('project4', 4, 4, 'in progress', 'om3', 'pm3', '2020-12-20', 'asap'),
    	('project5', 5, 5, 'completed', 'om1', 'pm1', '2020-01-17', 'write in "gray" for color selection'),
    	('project6', 6, 6, 'completed', 'om2', 'pm2', '2021-01-30', 'asap!'),
    	('project7', 7, 7, 'in progress', 'om2', 'pm2', '2021-02-04', 'asap!'),
    	('project8', 8, 8, 'completed', 'om3', 'pm3', '2021-02-12', 'write in "blue" for color selection'),
    	('project9', 9, 9, 'completed', 'om1', 'pm1', '2021-02-23', 'write in "orange" for color selection before faxing order in'),
    	('project10', 10, 10, 'in progress', 'om1', 'pm1', '2021-03-07', 'write in "black" for color selection'),
    	('project11', 11, 11, 'in progress', 'om2', 'pm2', '2021-03-21', 'no rush'),
    	('project12', 12, 12, 'completed', 'om3', 'pm3', '2021-05-01', 'write in "white for color selection'),
    	('project13', 13, 13, 'in progress', 'om3', 'pm1', '2021-06-14', 'no rush'),
    	('project14', 14, 14, 'completed', 'om1', 'pm2', '2021-07-25', 'write in "green" for color selection before faxing order in'),
    	('project15', 15, 15, 'completed', 'om2', 'pm3', '2021-07-31', 'asap!');
    
INSERT INTO Installations (project, installationLead, installationDate, installationInstructions)
VALUES 
	(1, 'iL1', '2020-11-11', 'use back enterance'),
	(2, 'iL2', '2020-11-28', 'call one hour before installation'),
	(3, 'iL3', '2020-12-20', 'install half in room 204 and half in 205'),
	(4, 'iL4', '2020-12-30', 'use back enterance'),
	(5, 'iL5', '2021-02-11', 'elevator requires key card, call reception on floor 8 to have someone let you up'),
	(6, 'iL6', '2021-02-15', 'use back enterance'),
	(7, 'iL7', '2021-02-28', 'call one hour before installation'),
	(8, 'iL8', '2021-04-01', 'use back enterance'),
	(9, 'iL9', '2021-04-10', 'install half on floor 2 and half on floor 3'),
	(10, 'iL10', '2021-05-03', 'use back enterance'),
	(11, 'iL11', '2021-06-11', 'elevator requires key card, call reception on floor 6 to have someone let you up'),
	(12, 'iL12', '2021-07-16', 'call one hour before installation'),
	(13, 'iL13', '2021-07-19', 'install half in office 7 and half in office 12'),
	(14, 'iL14', '2021-08-02', 'use back enterance'),
	(15, 'iL15', '2021-08-12', 'call one hour before installation');

INSERT INTO Orders (project, vendor, contractNumber, vendorOrderNumber, arrivalDate)
VALUES
	(1, 'v1', 'cn1', 'von1', '2020-11-11'),
	(2, 'v2', 'cn2', 'von2', '2020-11-28'),
	(3, 'v3', 'cn3', 'von3', '2020-12-20'),
	(4, 'v4', 'cn4', 'von4', '2020-12-30'),
	(5, 'v5', 'cn5', 'von5', '2021-02-11'),
	(6, 'v6', 'cn6', 'von6', '2021-02-15'),
	(7, 'v7', 'cn7', 'von7', '2021-02-28'),
	(8, 'v8', 'cn8', 'von8', '2021-04-01'),
	(9, 'v9', 'cn9', 'von9', '2021-04-10'),
	(10, 'v10', 'cn10', 'von10', '2021-05-03'),
	(11, 'v11', 'cn11', 'von11', '2021-06-11'),
	(12, 'v12', 'cn12', 'von12', '2021-07-16'),
	(13, 'v13', 'cn13', 'von13', '2021-07-19'),
	(14, 'v14', 'cn14', 'von14', '2021-08-02'),
	(15, 'v15', 'cn15', 'von15', '2021-08-12');
