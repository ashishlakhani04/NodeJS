var Emitter = require("events");

var emtr = new Emitter();

emtr.on("greet",function(){
	console.log("Somewhere, Someone said Hello!");
});
emtr.on("greet",function(){
	console.log("A greeting Occured!");
});

emtr.emit("greet");