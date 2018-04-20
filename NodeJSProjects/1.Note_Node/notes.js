console.log("Starting Notes");

const fs = require('fs'); 


var fetchNotes = () => {

	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}catch(e){
		return [];
	}

};
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};


// anonymous arrow function
var addNote = (title,body) => {

	var notes = fetchNotes();

	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	// console.log(duplicateNotes);


	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};
var getAll = () => {

	console.log("Getting all Notes!");

};
var getNote = (title) => {

	console.log("Getting Note! ",title);

};
var removeNote = (title) => {
	// fetch notes
	// filter notes, removing the one with title of argument
	// save new notes array
	var notes=fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
};

// this has a property addNote which points to the upper addNote function(ES6 Syntax)
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};