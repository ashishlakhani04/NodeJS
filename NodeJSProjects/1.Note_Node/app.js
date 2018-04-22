// 1. we are gonna use 3rd party library called yargs to make parsing the command 
// 		line arguments effortless.
// 2. node app.js add --title=secrets , node app.js add --title secrets these
// 		commands make key value pairs using args ,w hich are easy to use!


console.log('Starting App!');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
	describe: 'Title of note',
	demand: true, // Title is mandatory
	alias: 't' // shortcut
}
const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
}
const argv = yargs
.command('add','Add a new Note!',{
	title:titleOptions,
	body:bodyOptions
})
.command('list','List all Notes!')
.command('read','Read a Note!',{
	title:titleOptions
})
.command('remove','Remove a Note!',{
	title:titleOptions
})
.help()
.argv;
// var command = process.argv[2]; // first two index contain other useful value of directory structure
// console.log(process.argv); // process.argv takes the parameter from command line
// console.log("Command: ",command);
// console.log("Process", process.argv);
// console.log("Yargs", argv);
var command = argv._[0];

if(command === 'add'){

	var note = notes.addNote(argv.title,argv.body);
	if(note){
		console.log('Note Created');
		notes.logNote(note);
	}else{
		console.log('Note Title Taken');
	}

}else if(command === 'list'){
	 var allNotes = notes.getAll();
	 console.log(`Printing ${allNotes.length} note(s)`);
	 allNotes.forEach((note) => {
	 	notes.logNote(note);
	 });
}else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if(note){
		console.log('Note Read');
		notes.logNote(note);
	}else{
		console.log('Note Not Found!');
	}
}else if(command === 'remove'){
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was Removed!' : 'Note not found!';
	console.log(message);
}else{
	console.log('Command not recognized!');
}