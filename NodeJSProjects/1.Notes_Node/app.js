// first, we have included core node modules like OS,fileSystem
// secondly, we have included our own files like notes.js
// lastly, we have installed npm with commands like npm init and npm install and install
// lodash which contains some basic utilities functions



console.log('Starting App.js!');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
// const notes = require('./notes');


// console.log(_.isString('true'));

var filteredArray = _.uniq([1,2,5,4,1,2,5,6,5]);
console.log(filteredArray);


// var user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt',`Hello ${user.username} . You are ${notes.age} years old!
// 				 This means ${notes.check()} .`,function(err){ // template strings (es6)
// 	if(err){
// 		console.log('Unable to load the file!');
// 	}
// });
 // fs.appendFileSync('greetings.txt','Hello World!');