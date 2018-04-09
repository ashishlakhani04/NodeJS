// function statement

function greet(){

	console.log("hello");
	
}
greet();

// functions are first class in javaScript

function logGreet(fn){
	fn();
}

logGreet(greet);

// function Expression

var greetMe = function(){
	console.log("Hello Ashish!");
}
greetMe();

// it's first class
logGreet(greetMe);

// use a function expression on the fly

logGreet(function(){
	console.log("Hello Buddy!");
});