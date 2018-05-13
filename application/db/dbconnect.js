var mongojs = require('mongojs');		//Importing mongojs module of node.js

var adminDB = mongojs('HepCat', ['adminReg']);		//HepCat: Connection String (Database Name), adminReg: Collection Name, adminDB: Variable to access database
var patientDB = mongojs('HepCat', ['patientReg']);
var doctorDB = mongojs('HepCat', ['doctorReg']);
var appointmetsDB = mongojs('HepCat', ['appointmetReg']);		//Collections are created in database only when we insert data to that collection

var mongoose = require('mongoose');		//To validate or update the data in the database

mongoose.connect('mongodb://localhost/HepCat');		//Connects to HepCat database running locally on the default port (27017) ("changed from adminReg to HepCat")

module.exports = function(app) {
	
};
