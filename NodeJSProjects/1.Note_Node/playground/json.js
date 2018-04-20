// var obj = {
// 	name: "Ashish"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj); // string
// console.log(stringObj); // {"name":"Ashish"}

// var personString = '{"name": "Ashish","age": 21}';
// var person = JSON.parse(personString); // convert string to object
// console.log(typeof person);
// console.log(person);


const fs = require("fs");

var originalNote = {
	title: 'Some Title!',
	body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note.title);




