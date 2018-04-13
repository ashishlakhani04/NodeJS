exports = function(){ // equals operator create two objects here,one for module.exports and 
	console.log("Hello World");// one for exports
}

console.log(exports); // exports and module.exports are pointing to the same location
console.log(module.exports); // but they are showing different outputs

// actually the are pointing to the different objects
// node js returns module.exports so we use this instead of exports