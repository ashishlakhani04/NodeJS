console.log('Starting App.js!');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var user = os.userInfo();
// console.log(user);

fs.appendFile('greetings.txt',`Hello ${user.username} . You are ${notes.age} years old!
				 This means ${notes.check()} .`,function(err){ // template strings (es6)
	if(err){
		console.log('Unable to load the file!');
	}
});
 // fs.appendFileSync('greetings.txt','Hello World!');