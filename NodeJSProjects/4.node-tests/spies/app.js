var db = require('./db.js');

module.exports.signupHandler = ()=> {
	// Check if email already exists
	// Save the user to the database
	db.saveUser({
		email,
		password
	});
	// send the welcome email
};