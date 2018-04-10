// revealing module patterns

var greeting = "Hello Ashish!";

function greet(){

	console.log(greeting);

}
module.exports = {
	greet:greet
}