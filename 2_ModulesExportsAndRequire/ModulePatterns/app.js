// var greet = require("./greet1");
// greet();

// var greet2 = require("./greet2").greet;
// greet2();

// var greet3 = require("./greet3"); // it caches the module.exports
// greet3.greet();
// greet3.greeting = "Changed Hello World!" // and used it here
// console.log(greet3);

// var greet3b = require("./greet3"); // changes are occuring in same objects with same module.exports
// console.log(greet3b);
// greet3b.greet();

// in following case changes are occured in different object,change in one object does not reflect in the second object 
var Greet4 = require("./greet4");
var grtr = new Greet4();
grtr.greet();
grtr.greeting = "Hello"

var greet5 = require("./greet5").greet;
greet5();


